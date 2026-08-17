import {
  object,
  string,
  type Schema,
  type ValidationError,
} from "@safe-shape/core";
import { ConfigurationError, type ValidationIssue } from "#internal-core";

export interface WbCredentials {
  /** WB API token passed verbatim in the Authorization header. */
  readonly token: string;
}

const nonEmptyString = string().refine((value) => value.trim().length > 0, {
  message: "Expected a non-empty credential string.",
  expected: "non-empty string",
});

/** @internal */
export const wbCredentialsSchema: Schema<WbCredentials> = object({
  token: nonEmptyString,
});

/** @internal */
export function parseWbCredentials(input: unknown): WbCredentials {
  const result = wbCredentialsSchema.safeParse(input);
  if (result.success) return Object.freeze({ ...result.data });

  throw new ConfigurationError(
    "Invalid Wildberries credentials.",
    toValidationIssues(result.error),
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
