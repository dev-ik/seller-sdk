import { describe, expect, it } from "vitest";
import {
  calculateRetryDelay,
  isRetryableStatus,
  normalizeRetryOptions,
  parseRetryAfter,
} from "../../packages/core/src/core/retry-policy.js";

describe("retry policy", () => {
  it("defaults safe operations to retries and unsafe operations to one attempt", () => {
    expect(normalizeRetryOptions("safe").maxAttempts).toBe(3);
    expect(normalizeRetryOptions("unsafe").maxAttempts).toBe(1);
    expect(
      normalizeRetryOptions("unsafe", { maxAttempts: 10 }).maxAttempts,
    ).toBe(1);
  });

  it("recognizes retryable response statuses", () => {
    expect(isRetryableStatus(429)).toBe(true);
    expect(isRetryableStatus(503)).toBe(true);
    expect(isRetryableStatus(401)).toBe(false);
  });

  it("parses Retry-After seconds and dates", () => {
    const now = Date.parse("2026-08-14T00:00:00.000Z");
    expect(parseRetryAfter("2", now)).toBe(2_000);
    expect(parseRetryAfter("Fri, 14 Aug 2026 00:00:05 GMT", now)).toBe(5_000);
    expect(parseRetryAfter("invalid", now)).toBeUndefined();
  });

  it("calculates bounded deterministic jitter", () => {
    const options = normalizeRetryOptions("safe", {
      baseDelayMs: 100,
      maxDelayMs: 1_000,
    });

    expect(calculateRetryDelay(2, options, undefined, () => 0.5)).toBe(200);
    expect(calculateRetryDelay(2, options, 5_000, () => 0.5)).toBe(5_000);
  });
});
