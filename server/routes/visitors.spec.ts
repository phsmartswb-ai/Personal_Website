import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { handleVisitors } from "./visitors";
import { Request, Response } from "express";

describe("handleVisitors", () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    // Mock fetch for CounterAPI responses
    globalThis.fetch = vi.fn().mockImplementation(async (url: string | URL | Request) => {
      const urlStr = url.toString();
      const isUp = urlStr.endsWith("/up");
      return {
        ok: true,
        status: 200,
        json: async () => ({
          data: {
            up_count: isUp ? 5 : 4,
            down_count: 0,
          },
        }),
      } as unknown as Response;
    });
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("should return visitors count on read action without incrementing", async () => {
    let responseData: any = null;
    let statusCode: number | null = null;

    const req = {
      query: { action: "read" },
    } as unknown as Request;

    const res = {
      setHeader: vi.fn(),
      status: vi.fn().mockImplementation((code: number) => {
        statusCode = code;
        return res;
      }),
      json: vi.fn().mockImplementation((data: any) => {
        responseData = data;
        return res;
      }),
    } as unknown as Response;

    await handleVisitors(req, res, () => {});

    expect(statusCode).toBe(200);
    expect(responseData).toBeDefined();
    expect(typeof responseData.count).toBe("number");
    expect(responseData.incremented).toBe(false);
  });

  it("should increment count when requested", async () => {
    let responseData1: any = null;
    let responseData2: any = null;

    const mockRes = (setter: (data: any) => void) =>
      ({
        setHeader: vi.fn(),
        status: vi.fn().mockReturnValue({
          json: vi.fn().mockImplementation(setter),
        }),
      }) as unknown as Response;

    const reqRead = { query: { action: "read" } } as unknown as Request;
    await handleVisitors(
      reqRead,
      mockRes((d) => {
        responseData1 = d;
      }),
      () => {}
    );

    const reqInc = { query: { action: "increment" } } as unknown as Request;
    await handleVisitors(
      reqInc,
      mockRes((d) => {
        responseData2 = d;
      }),
      () => {}
    );

    expect(responseData2.count).toBeGreaterThanOrEqual(responseData1.count);
    expect(responseData2.incremented).toBe(true);
  });
});
