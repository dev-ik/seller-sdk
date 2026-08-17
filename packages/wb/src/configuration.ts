import { literal, number, union, type Schema } from "@safe-shape/core";
import {
  ConfigurationError,
  type TransportResponseMetadata,
  type ValidationIssue,
} from "#internal-core";

export type WbEnvironment = "production" | "sandbox";
export type WbResponseMetadata = TransportResponseMetadata;

export interface WbClientConfig {
  /** API environment. Production is used by default. */
  readonly environment?: WbEnvironment;
  readonly timeoutMs?: number;
  readonly deadlineMs?: number;
  /** Number of retries after the first attempt for documented read-only operations. */
  readonly maxRetries?: number;
  readonly onResponse?: (metadata: WbResponseMetadata) => void;
}

const environmentSchema = union([literal("production"), literal("sandbox")]);
const timeoutSchema = integerBetween(1, 300_000, "1..300000 milliseconds");
const deadlineSchema = integerBetween(1, 600_000, "1..600000 milliseconds");
const retriesSchema = integerBetween(0, 9, "integer from 0 to 9");
const CONFIG_KEYS = new Set([
  "environment",
  "timeoutMs",
  "deadlineMs",
  "maxRetries",
  "onResponse",
]);

/** @internal */
export function parseWbClientConfig(input: unknown): WbClientConfig {
  if (input === undefined) return Object.freeze({});
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new ConfigurationError("Invalid Wildberries client configuration.", [
      {
        code: "invalid_type",
        path: [],
        message: "Expected a Wildberries client configuration object.",
        expected: "object",
        received: input === null ? "null" : typeof input,
      },
    ]);
  }

  const value = input as Record<string, unknown>;
  const issues: ValidationIssue[] = [];
  for (const key of Object.keys(value)) {
    if (!CONFIG_KEYS.has(key)) {
      issues.push({
        code: "unexpected_property",
        path: [key],
        message: `Unexpected Wildberries client configuration property: ${key}.`,
        expected:
          "environment | timeoutMs | deadlineMs | maxRetries | onResponse",
        received: key,
      });
    }
  }

  validateOptional(value, "environment", environmentSchema, issues);
  validateOptional(value, "timeoutMs", timeoutSchema, issues);
  validateOptional(value, "deadlineMs", deadlineSchema, issues);
  validateOptional(value, "maxRetries", retriesSchema, issues);
  if (
    value["onResponse"] !== undefined &&
    typeof value["onResponse"] !== "function"
  ) {
    issues.push({
      code: "invalid_type",
      path: ["onResponse"],
      message: "Expected onResponse to be a function.",
      expected: "function",
      received: typeof value["onResponse"],
    });
  }

  if (issues.length > 0) {
    throw new ConfigurationError(
      "Invalid Wildberries client configuration.",
      issues,
    );
  }

  return Object.freeze({
    ...(value["environment"] === undefined
      ? {}
      : { environment: value["environment"] as WbEnvironment }),
    ...(value["timeoutMs"] === undefined
      ? {}
      : { timeoutMs: value["timeoutMs"] as number }),
    ...(value["deadlineMs"] === undefined
      ? {}
      : { deadlineMs: value["deadlineMs"] as number }),
    ...(value["maxRetries"] === undefined
      ? {}
      : { maxRetries: value["maxRetries"] as number }),
    ...(value["onResponse"] === undefined
      ? {}
      : {
          onResponse: value["onResponse"] as (
            metadata: WbResponseMetadata,
          ) => void,
        }),
  });
}

function integerBetween(
  minimum: number,
  maximum: number,
  expected: string,
): Schema<number> {
  return number().refine(
    (value) => Number.isInteger(value) && value >= minimum && value <= maximum,
    { message: `Expected ${expected}.`, expected },
  );
}

function validateOptional<T>(
  input: Readonly<Record<string, unknown>>,
  key: string,
  schema: Schema<T>,
  issues: ValidationIssue[],
): void {
  if (input[key] === undefined) return;
  const result = schema.safeParse(input[key]);
  if (result.success) return;
  issues.push(
    ...result.error.issues.map((issue) => ({
      code: issue.code,
      path: [key, ...issue.path],
      message: issue.message,
      expected: issue.expected,
      received: issue.received,
    })),
  );
}
