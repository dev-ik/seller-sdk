import {
  literal,
  object,
  string,
  type Schema,
  type ValidationError,
} from "@safe-shape/core";
import {
  ConfigurationError,
  OzonClient,
  type OzonCredentials,
  type ValidationIssue,
} from "@seller-sdk/ozon";
import { Marketplace, type SellerClientOptions } from "./marketplace.js";

const nonEmptyString = string().refine((value) => value.trim().length > 0, {
  message: "Expected a non-empty credential string.",
  expected: "non-empty string",
});

const ozonCredentialsSchema: Schema<OzonCredentials> = object({
  clientId: nonEmptyString,
  apiKey: nonEmptyString,
});

const sellerClientOptionsSchema: Schema<SellerClientOptions> = object({
  marketplace: literal(Marketplace.Ozon),
  credentials: ozonCredentialsSchema,
});

export class SellerClient {
  readonly marketplace: typeof Marketplace.Ozon;
  readonly ozon: OzonClient;

  constructor(options: SellerClientOptions) {
    const parsedOptions = parseSellerClientOptions(options);
    this.marketplace = parsedOptions.marketplace;
    this.ozon = new OzonClient(parsedOptions.credentials, parsedOptions.config);
  }
}

function parseSellerClientOptions(input: unknown): SellerClientOptions {
  const record =
    typeof input === "object" && input !== null && !Array.isArray(input)
      ? (input as Record<string, unknown>)
      : undefined;
  const result = sellerClientOptionsSchema.safeParse(
    record === undefined
      ? input
      : {
          marketplace: record["marketplace"],
          credentials: record["credentials"],
        },
  );
  if (result.success) {
    const unexpectedKeys = Object.keys(record ?? {}).filter(
      (key) => !["marketplace", "credentials", "config"].includes(key),
    );
    if (unexpectedKeys.length === 0) {
      return {
        ...result.data,
        ...(record?.["config"] === undefined
          ? {}
          : { config: record["config"] }),
      } as SellerClientOptions;
    }
  }

  throw new ConfigurationError(
    "Invalid SellerClient configuration.",
    result.success
      ? Object.keys(record ?? {})
          .filter(
            (key) => !["marketplace", "credentials", "config"].includes(key),
          )
          .map((key) => ({
            code: "unexpected_property",
            path: [key],
            message: `Unexpected SellerClient configuration property: ${key}.`,
            expected: "marketplace | credentials | config",
            received: key,
          }))
      : toValidationIssues(result.error),
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
