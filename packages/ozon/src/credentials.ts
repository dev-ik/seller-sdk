import {
  object,
  string,
  type Schema,
  type ValidationError,
} from "@safe-shape/core";
import { ConfigurationError } from "#internal-core";
import type { ValidationIssue } from "#internal-core";

export interface OzonCredentials {
  readonly clientId: string;
  readonly apiKey: string;
}

const nonEmptyString = string().refine((value) => value.trim().length > 0, {
  message: "Expected a non-empty credential string.",
  expected: "non-empty string",
});

/** @internal */
export const ozonCredentialsSchema: Schema<OzonCredentials> = object({
  clientId: nonEmptyString,
  apiKey: nonEmptyString,
});

/** @internal */
export function parseOzonCredentials(input: unknown): OzonCredentials {
  const result = ozonCredentialsSchema.safeParse(input);
  if (result.success) return Object.freeze({ ...result.data });

  throw new ConfigurationError(
    "Invalid Ozon credentials.",
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
