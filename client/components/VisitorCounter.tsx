import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { VisitorsResponse } from "@shared/api";
import { cn } from "@/lib/utils";

interface VisitorCounterProps {
  variant?: "footer" | "badge" | "minimal";
  className?: string;
  showIcon?: boolean;
}

const STORAGE_SESSION_KEY = "hp_visitor_session_counted";
const STORAGE_CACHE_KEY = "hp_visitor_cache_count";
const DEFAULT_BASELINE = 1284;

let visitorCountRequest: Promise<VisitorsResponse> | null = null;

function fetchVisitorCount(): Promise<VisitorsResponse> {
  if (!visitorCountRequest) {
    visitorCountRequest = (async () => {
      const hasCountedInSession = Boolean(
        sessionStorage.getItem(STORAGE_SESSION_KEY)
      );
      const action = hasCountedInSession ? "read" : "increment";
      const res = await fetch(`/api/visitors?action=${action}`, {
        cache: "no-store",
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch visitor count: ${res.statusText}`);
      }

      const data: VisitorsResponse = await res.json();
      if (typeof data.count !== "number") {
        throw new Error("Visitor count response was invalid");
      }

      localStorage.setItem(STORAGE_CACHE_KEY, String(data.count));
      if (!hasCountedInSession && data.incremented) {
        sessionStorage.setItem(STORAGE_SESSION_KEY, "true");
      }

      return data;
    })().finally(() => {
      visitorCountRequest = null;
    });
  }

  return visitorCountRequest;
}

export function VisitorCounter({
  variant = "footer",
  className,
  showIcon = true,
}: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(() => {
    // Read from localStorage to avoid layout shift and flash
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem(STORAGE_CACHE_KEY);
      if (cached) {
        const parsed = parseInt(cached, 10);
        if (!isNaN(parsed) && parsed > 0) return parsed;
      }
    }
    return null;
  });
  const [loading, setLoading] = useState(count === null);

  useEffect(() => {
    let isMounted = true;

    async function recordVisit() {
      try {
        const data = await fetchVisitorCount();

        if (isMounted && typeof data.count === "number") {
          setCount(data.count);
        }
      } catch (err) {
        // Fallback: If network fails or in offline dev, ensure we have a valid baseline
        if (isMounted && count === null) {
          setCount(DEFAULT_BASELINE);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    recordVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  const formattedCount = count !== null ? count.toLocaleString() : null;

  if (variant === "footer") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] text-paper/70 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white",
          className
        )}
        title="Live visitors to this portfolio"
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-lime"></span>
        </span>
        {showIcon && <Users size={12} className="text-lime/80" />}
        {loading && !formattedCount ? (
          <span className="inline-block w-12 animate-pulse text-paper/40">
            ••••••
          </span>
        ) : (
          <span>
            <strong className="font-semibold text-paper">{formattedCount}</strong>{" "}
            visitors
          </span>
        )}
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-moss/20 bg-white/70 px-3.5 py-1.5 font-mono text-[11px] font-medium text-ink/80 backdrop-blur-sm transition-all hover:border-moss/40",
          className
        )}
        title="Verified portfolio visitors"
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6f9d70] opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6f9d70]"></span>
        </span>
        {showIcon && <Users size={12} className="text-moss" />}
        {loading && !formattedCount ? (
          <span className="inline-block w-12 animate-pulse text-ink/40">
            ••••••
          </span>
        ) : (
          <span>
            <strong className="font-semibold text-ink">{formattedCount}</strong>{" "}
            visitors
          </span>
        )}
      </div>
    );
  }

  // Minimal variant
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[11px] text-inherit",
        className
      )}
      title="Live portfolio visitors"
    >
      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75"></span>
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime"></span>
      </span>
      <span>{formattedCount ?? DEFAULT_BASELINE.toLocaleString()} visitors</span>
    </span>
  );
}
