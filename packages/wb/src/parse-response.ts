import type { ParseResult, Schema } from "@safe-shape/core";
import { ResponseValidationError, type ValidationIssue } from "#internal-core";

/** @internal */
export function parseWbResponse<T>(
  schema: Schema<T>,
  input: unknown,
  operationId: string,
): T {
  const initialResult = schema.safeParse(input);
  if (initialResult.success) return initialResult.data;

  const compatibleInput = normalizeOptionalNulls(
    input,
    initialResult.error.issues,
  );
  return parseWbResult(
    compatibleInput === input
      ? initialResult
      : schema.safeParse(compatibleInput),
    operationId,
  );
}

/** @internal */
export function parseWbBinaryResponse(
  input: unknown,
  operationId: string,
): ArrayBuffer {
  if (input instanceof ArrayBuffer) return input;
  throw new ResponseValidationError(
    `Wildberries API response validation failed for operation ${operationId}.`,
    {
      operationId,
      issues: [
        {
          code: "invalid_type",
          path: [],
          message: "Expected a binary response.",
          expected: "ArrayBuffer",
          received: input === null ? "null" : typeof input,
        },
      ],
    },
  );
}

/** @internal */
export function unexpectedWbSuccessStatus(
  operationId: string,
  status: number,
): never {
  throw new ResponseValidationError(
    `Wildberries API returned an undocumented success status for operation ${operationId}.`,
    {
      operationId,
      issues: [
        {
          code: "invalid_value",
          path: [],
          message: `Unexpected HTTP success status ${status}.`,
          expected: "documented 2xx status",
          received: String(status),
        },
      ],
    },
  );
}

function parseWbResult<T>(result: ParseResult<T>, operationId: string): T {
  if (result.success) return result.data;
  throw new ResponseValidationError(
    `Wildberries API response validation failed for operation ${operationId}.`,
    {
      operationId,
      cause: result.error,
      issues: toValidationIssues(result.error.issues),
    },
  );
}

function normalizeOptionalNulls(
  input: unknown,
  issues: readonly {
    readonly code: string;
    readonly path: readonly (string | number)[];
  }[],
): unknown {
  const nullablePaths = issues
    .filter((issue) => issue.code === "invalid_type")
    .map((issue) => issue.path)
    .filter((path) => readAtPath(input, path) === null);
  if (nullablePaths.length === 0) return input;

  const clone = structuredClone(input);
  let changed = false;
  for (const path of nullablePaths) {
    changed = deleteAtPath(clone, path) || changed;
  }
  return changed ? clone : input;
}

function readAtPath(
  input: unknown,
  path: readonly (string | number)[],
): unknown {
  let value = input;
  for (const segment of path) {
    if (typeof value !== "object" || value === null) return undefined;
    value = (value as Record<string | number, unknown>)[segment];
  }
  return value;
}

function deleteAtPath(
  input: unknown,
  path: readonly (string | number)[],
): boolean {
  if (path.length === 0) return false;
  let parent = input;
  for (const segment of path.slice(0, -1)) {
    if (typeof parent !== "object" || parent === null) return false;
    parent = (parent as Record<string | number, unknown>)[segment];
  }
  if (typeof parent !== "object" || parent === null || Array.isArray(parent)) {
    return false;
  }
  return delete (parent as Record<string, unknown>)[String(path.at(-1))];
}

function toValidationIssues(
  issues: readonly {
    readonly code: string;
    readonly path: readonly (string | number)[];
    readonly message: string;
    readonly expected?: string;
    readonly received?: unknown;
  }[],
): readonly ValidationIssue[] {
  return issues.map((issue) => ({
    code: issue.code,
    path: issue.path,
    message: issue.message,
    ...(issue.expected === undefined ? {} : { expected: issue.expected }),
    ...(issue.received === undefined
      ? {}
      : { received: String(issue.received) }),
  }));
}
