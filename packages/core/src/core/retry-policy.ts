import type { RetryOptions, RetrySafety } from "./transport.js";

const RETRYABLE_STATUSES = new Set([408, 425, 429, 500, 502, 503, 504]);

export interface NormalizedRetryOptions {
  readonly maxAttempts: number;
  readonly baseDelayMs: number;
  readonly maxDelayMs: number;
}

export function normalizeRetryOptions(
  safety: RetrySafety,
  options: RetryOptions = {},
): NormalizedRetryOptions {
  const defaultAttempts = safety === "safe" ? 3 : 1;

  return {
    maxAttempts:
      safety === "unsafe"
        ? 1
        : clampInteger(options.maxAttempts ?? defaultAttempts, 1, 10),
    baseDelayMs: clampInteger(options.baseDelayMs ?? 250, 0, 60_000),
    maxDelayMs: clampInteger(options.maxDelayMs ?? 5_000, 0, 120_000),
  };
}

export function isRetryableStatus(status: number): boolean {
  return RETRYABLE_STATUSES.has(status);
}

export function parseRetryAfter(
  value: string | null,
  nowMs = Date.now(),
): number | undefined {
  if (value === null) return undefined;

  const seconds = Number(value);
  if (Number.isFinite(seconds) && seconds >= 0)
    return Math.round(seconds * 1_000);

  const dateMs = Date.parse(value);
  if (Number.isNaN(dateMs)) return undefined;

  return Math.max(0, dateMs - nowMs);
}

export function calculateRetryDelay(
  attempt: number,
  options: NormalizedRetryOptions,
  retryAfterMs: number | undefined,
  random = Math.random,
): number {
  if (retryAfterMs !== undefined) return Math.max(0, retryAfterMs);

  const exponential = Math.min(
    options.maxDelayMs,
    options.baseDelayMs * 2 ** Math.max(0, attempt - 1),
  );
  const jitterFactor = 0.8 + random() * 0.4;
  return Math.round(exponential * jitterFactor);
}

function clampInteger(value: number, minimum: number, maximum: number): number {
  if (!Number.isFinite(value)) return minimum;
  return Math.min(maximum, Math.max(minimum, Math.trunc(value)));
}
