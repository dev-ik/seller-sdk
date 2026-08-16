import { number, type Schema, type ValidationError } from "@safe-shape/core";
import {
  ConfigurationError,
  type TransportResponseMetadata,
  type ValidationIssue,
} from "#internal-core";

export type OzonResponseMetadata = TransportResponseMetadata;

export interface OzonClientConfig {
  /** Тайм-аут одной попытки запроса. По умолчанию 30 секунд. */
  readonly timeoutMs?: number;
  /** Общий дедлайн запроса с учётом повторов. По умолчанию 60 секунд. */
  readonly deadlineMs?: number;
  /** Количество повторов безопасного запроса после первой попытки. По умолчанию 2. */
  readonly maxRetries?: number;
  /** Вызывается для каждого HTTP-ответа, включая ответы перед повторной попыткой. */
  readonly onResponse?: (metadata: OzonResponseMetadata) => void;
}

const timeoutSchema = integerBetween(1, 300_000, "1..300000 milliseconds");
const deadlineSchema = integerBetween(1, 600_000, "1..600000 milliseconds");
const retriesSchema = integerBetween(0, 9, "integer from 0 to 9");
const CONFIG_KEYS = new Set([
  "timeoutMs",
  "deadlineMs",
  "maxRetries",
  "onResponse",
]);

/** @internal */
export function parseOzonClientConfig(input: unknown): OzonClientConfig {
  if (input === undefined) return Object.freeze({});
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new ConfigurationError("Invalid Ozon client configuration.", [
      {
        code: "invalid_type",
        path: [],
        message: "Expected an Ozon client configuration object.",
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
        message: `Unexpected Ozon client configuration property: ${key}.`,
        expected: "timeoutMs | deadlineMs | maxRetries | onResponse",
        received: key,
      });
    }
  }

  validateOptionalNumber(value, "timeoutMs", timeoutSchema, issues);
  validateOptionalNumber(value, "deadlineMs", deadlineSchema, issues);
  validateOptionalNumber(value, "maxRetries", retriesSchema, issues);
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
    throw new ConfigurationError("Invalid Ozon client configuration.", issues);
  }

  return Object.freeze({
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
            metadata: OzonResponseMetadata,
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

function validateOptionalNumber(
  input: Readonly<Record<string, unknown>>,
  key: "timeoutMs" | "deadlineMs" | "maxRetries",
  schema: Schema<number>,
  issues: ValidationIssue[],
): void {
  if (input[key] === undefined) return;
  const result = schema.safeParse(input[key]);
  if (result.success) return;
  issues.push(...toValidationIssues(result.error, key));
}

function toValidationIssues(
  error: ValidationError,
  key: string,
): readonly ValidationIssue[] {
  return error.issues.map((issue) => ({
    code: issue.code,
    path: [key, ...issue.path],
    message: issue.message,
    expected: issue.expected,
    received: issue.received,
  }));
}
