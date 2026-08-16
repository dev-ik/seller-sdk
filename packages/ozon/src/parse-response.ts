import type { ParseResult, Schema, ValidationError } from "@safe-shape/core";
import { ResponseValidationError } from "#internal-core";
import type { ValidationIssue } from "#internal-core";

/** @internal */
export function parseOzonResponse<T>(
  schema: Schema<T>,
  input: unknown,
  operationId: string,
): T {
  const initialResult = schema.safeParse(input);
  if (initialResult.success) return initialResult.data;

  const compatibleInput = normalizeCompatibleResponseChanges(
    input,
    initialResult.error.issues,
  );
  if (compatibleInput !== input) {
    return parseOzonResult(schema.safeParse(compatibleInput), operationId);
  }

  return parseOzonResult(initialResult, operationId);
}

/** @internal */
export function parseOzonResult<T>(
  result: ParseResult<T>,
  operationId: string,
): T {
  if (result.success) return result.data;

  throw new ResponseValidationError(
    `Ozon API response validation failed for operation ${operationId}.`,
    {
      operationId,
      issues: toValidationIssues(result.error),
      cause: result.error,
    },
  );
}

function toValidationIssues(
  error: ValidationError,
): readonly ValidationIssue[] {
  return error.issues.map((issue) => ({
    code: issue.code,
    path: issue.path,
    message: issue.message,
    expected: issue.expected,
    received: issue.received,
  }));
}

/**
 * Ozon may return `null` for an optional property or add a response property
 * before its OpenAPI document is updated. Both changes are backwards-compatible
 * for typed consumers, so retry validation after omitting only those exact paths.
 * Known nullable fields still keep their `null` value because the first parse
 * succeeds and never reaches this compatibility pass.
 */
function normalizeCompatibleResponseChanges(
  input: unknown,
  issues: readonly ValidationError["issues"][number][],
): unknown {
  const pathsToOmit = issues.flatMap((issue) => {
    if (issue.code === "unexpected_property") return [issue.path];

    const lastSegment = issue.path.at(-1);
    if (
      issue.code === "invalid_type" &&
      issue.received === "null" &&
      typeof lastSegment === "string" &&
      valueAtPath(input, issue.path) === null
    ) {
      return [issue.path];
    }

    return [];
  });

  return pathsToOmit.length === 0 ? input : omitPaths(input, pathsToOmit);
}

function valueAtPath(
  input: unknown,
  path: readonly (string | number)[],
): unknown {
  let value = input;
  for (const segment of path) {
    if (!isContainer(value)) return undefined;
    if (Array.isArray(value)) {
      if (typeof segment !== "number") return undefined;
      value = value[segment];
    } else {
      value = value[String(segment)];
    }
  }
  return value;
}

function omitPaths(
  input: unknown,
  paths: readonly (readonly (string | number)[])[],
): unknown {
  if (!isContainer(input)) return input;

  if (Array.isArray(input)) {
    return input.map((value, index) => {
      const childPaths = childPathsFor(paths, index);
      return childPaths.length === 0 ? value : omitPaths(value, childPaths);
    });
  }

  return Object.fromEntries(
    Object.entries(input).flatMap(([key, value]) => {
      const matchingPaths = paths.filter((path) => path[0] === key);
      if (matchingPaths.some((path) => path.length === 1)) return [];

      const childPaths = childPathsFor(matchingPaths, key);
      return [
        [key, childPaths.length === 0 ? value : omitPaths(value, childPaths)],
      ];
    }),
  );
}

function childPathsFor(
  paths: readonly (readonly (string | number)[])[],
  segment: string | number,
): readonly (readonly (string | number)[])[] {
  return paths
    .filter((path) => path[0] === segment && path.length > 1)
    .map((path) => path.slice(1));
}

function isContainer(
  input: unknown,
): input is Record<string, unknown> | unknown[] {
  return typeof input === "object" && input !== null;
}
