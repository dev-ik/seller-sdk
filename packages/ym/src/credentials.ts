import {
  object,
  string,
  type Schema,
  type ValidationError,
} from "@safe-shape/core";
import { ConfigurationError, type ValidationIssue } from "#internal-core";

export interface YmCredentials {
  /** Yandex Market API key passed verbatim in the Api-Key header. */
  readonly apiKey: string;
}

const nonEmptyString = string().refine((value) => value.trim().length > 0, {
  message: "Expected a non-empty credential string.",
  expected: "non-empty string",
});

/** @internal */
export const ymCredentialsSchema: Schema<YmCredentials> = object({
  apiKey: nonEmptyString,
});

/** @internal */
export function parseYmCredentials(input: unknown): YmCredentials {
  const result = ymCredentialsSchema.safeParse(input);
  if (result.success) return Object.freeze({ ...result.data });

  throw new ConfigurationError(
    "Invalid Yandex Market credentials.",
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
