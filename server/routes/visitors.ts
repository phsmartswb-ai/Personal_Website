import { RequestHandler } from "express";
import fs from "node:fs";
import path from "node:path";
import { VisitorsResponse } from "@shared/api";

const BASELINE_COUNT = parseInt(process.env.INITIAL_VISITOR_COUNT || "1284", 10);
const COUNTER_WORKSPACE =
  process.env.COUNTER_WORKSPACE ||
  process.env.COUNTER_NAMESPACE ||
  "hemanth-palakaluri-portfolio";
const COUNTER_KEY = process.env.COUNTER_KEY || "visitors";
const COUNTER_API_KEY = process.env.COUNTER_API_KEY || process.env.COUNTER_ACCESS_TOKEN;

const DATA_DIR = path.resolve(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "visitors.json");

// In-memory cache
let inMemoryCount = BASELINE_COUNT;

function loadLocalCount(): number {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      if (typeof parsed.count === "number" && !isNaN(parsed.count)) {
        return Math.max(parsed.count, BASELINE_COUNT);
      }
    }
  } catch (err) {
    // Ignore read errors, will fallback to in-memory
  }
  return inMemoryCount;
}

function saveLocalCount(count: number): void {
  inMemoryCount = count;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify({ count, updatedAt: new Date().toISOString() }), "utf-8");
  } catch (err) {
    // Filesystem may be read-only in serverless/lambda environments
  }
}

// Initialize on module load
inMemoryCount = loadLocalCount();

export const handleVisitors: RequestHandler = async (req, res) => {
  const isRead = req.query.action === "read" || req.query.increment === "false";
  let count = inMemoryCount;
  let source: "external" | "local" | "fallback" = "local";
  let incremented = false;
  let counterUnavailable = false;

  // Netlify functions do not share local files between instances. In production,
  // never report a local increment as if it were part of the persistent total.
  const isProductionRuntime =
    process.env.NODE_ENV === "production" || process.env.NETLIFY === "true";

  if (COUNTER_API_KEY) {
    try {
      const endpoint = isRead
        ? `https://api.counterapi.dev/v2/${encodeURIComponent(COUNTER_WORKSPACE)}/${encodeURIComponent(COUNTER_KEY)}`
        : `https://api.counterapi.dev/v2/${encodeURIComponent(COUNTER_WORKSPACE)}/${encodeURIComponent(COUNTER_KEY)}/up`;

      const externalRes = await fetch(endpoint, {
        signal: AbortSignal.timeout(5000),
        cache: "no-store",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${COUNTER_API_KEY}`,
        },
      });

      if (!externalRes.ok) {
        const errorBody = (await externalRes.text()).slice(0, 500);
        throw new Error(
          `CounterAPI returned HTTP ${externalRes.status}: ${errorBody || externalRes.statusText}`
        );
      }

      const payload = (await externalRes.json()) as {
        data?: { up_count?: number; down_count?: number };
      };
      const upCount = payload.data?.up_count;
      const downCount = payload.data?.down_count ?? 0;

      if (
        typeof upCount !== "number" ||
        !Number.isFinite(upCount) ||
        typeof downCount !== "number" ||
        !Number.isFinite(downCount)
      ) {
        throw new Error("CounterAPI returned an invalid count");
      }

      count = Math.max(BASELINE_COUNT, BASELINE_COUNT + upCount - downCount);
      source = "external";
      incremented = !isRead;
      saveLocalCount(count);
    } catch (err) {
      counterUnavailable = true;
      console.error("Visitor counter provider request failed:", err);
    }
  } else if (isProductionRuntime) {
    counterUnavailable = true;
    console.error("Visitor counter unavailable: COUNTER_API_KEY is not configured.");
  }

  // Local storage is useful during development, but isn't shared by serverless
  // instances. Keep it out of production counts when the provider is unavailable.
  if (source === "local" && !counterUnavailable) {
    count = loadLocalCount();
    if (!isRead) {
      count += 1;
      incremented = true;
      saveLocalCount(count);
    }
  } else if (counterUnavailable) {
    count = loadLocalCount();
    source = "fallback";
  }

  const response: VisitorsResponse = {
    count,
    incremented,
    source,
  };

  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.status(counterUnavailable ? 503 : 200).json(response);
};
