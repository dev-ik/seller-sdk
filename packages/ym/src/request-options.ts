import {
  ConfigurationError,
  type RetryOptions,
  type TransportRequest,
  type ValidationIssue,
} from "#internal-core";

export interface YmRequestOptions {
  readonly signal?: AbortSignal;
  readonly timeoutMs?: number;
  readonly deadlineMs?: number;
  /** Number of retries after the first attempt for documented read-only operations. */
  readonly maxRetries?: number;
}

/** @internal */
export function toTransportRequestOptions(
  options: YmRequestOptions,
): Pick<TransportRequest, "signal" | "timeoutMs" | "deadlineMs" | "retry"> {
  validateRequestOptions(options);
  return {
    ...(options.signal === undefined ? {} : { signal: options.signal }),
    ...(options.timeoutMs === undefined
      ? {}
      : { timeoutMs: options.timeoutMs }),
    ...(options.deadlineMs === undefined
      ? {}
      : { deadlineMs: options.deadlineMs }),
    ...(options.maxRetries === undefined
      ? {}
      : {
          retry: {
            maxAttempts: options.maxRetries + 1,
          } satisfies RetryOptions,
        }),
  };
}

function validateRequestOptions(options: YmRequestOptions): void {
  const issues: ValidationIssue[] = [];
  validateIntegerOption(options.timeoutMs, "timeoutMs", 1, 300_000, issues);
  validateIntegerOption(options.deadlineMs, "deadlineMs", 1, 600_000, issues);
  validateIntegerOption(options.maxRetries, "maxRetries", 0, 9, issues);
  if (issues.length > 0) {
    throw new ConfigurationError(
      "Invalid Yandex Market request options.",
      issues,
    );
  }
}

function validateIntegerOption(
  value: number | undefined,
  key: "timeoutMs" | "deadlineMs" | "maxRetries",
  minimum: number,
  maximum: number,
  issues: ValidationIssue[],
): void {
  if (value === undefined) return;
  if (Number.isInteger(value) && value >= minimum && value <= maximum) return;
  issues.push({
    code: "invalid_value",
    path: [key],
    message: `Expected an integer from ${minimum} to ${maximum}.`,
    expected: `integer from ${minimum} to ${maximum}`,
    received: String(value),
  });
}
