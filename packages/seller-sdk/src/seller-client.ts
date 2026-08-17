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
import { WbClient, type WbCredentials } from "@seller-sdk/wb";
import {
  Marketplace,
  type Marketplace as MarketplaceName,
  type MarketplaceRegistry,
  type SellerClientOptions,
} from "./marketplace.js";

const nonEmptyString = string().refine((value) => value.trim().length > 0, {
  message: "Expected a non-empty credential string.",
  expected: "non-empty string",
});

const ozonCredentialsSchema: Schema<OzonCredentials> = object({
  clientId: nonEmptyString,
  apiKey: nonEmptyString,
});

const wbCredentialsSchema: Schema<WbCredentials> = object({
  token: nonEmptyString,
});

const ozonSellerClientOptionsSchema = object({
  marketplace: literal(Marketplace.Ozon),
  credentials: ozonCredentialsSchema,
});

const wbSellerClientOptionsSchema = object({
  marketplace: literal(Marketplace.Wb),
  credentials: wbCredentialsSchema,
});

export class SellerClient<const M extends MarketplaceName = MarketplaceName> {
  readonly marketplace: M;
  readonly client: MarketplaceRegistry[M]["client"];
  declare readonly ozon: M extends typeof Marketplace.Ozon
    ? OzonClient
    : undefined;
  declare readonly wb: M extends typeof Marketplace.Wb ? WbClient : undefined;

  constructor(options: SellerClientOptions<M>) {
    const parsedOptions = parseSellerClientOptions(options);
    this.marketplace = parsedOptions.marketplace as M;

    const client =
      parsedOptions.marketplace === Marketplace.Ozon
        ? new OzonClient(parsedOptions.credentials, parsedOptions.config)
        : new WbClient(parsedOptions.credentials, parsedOptions.config);
    this.client = client as MarketplaceRegistry[M]["client"];
    Object.defineProperties(this, {
      ozon: {
        value:
          parsedOptions.marketplace === Marketplace.Ozon ? client : undefined,
      },
      wb: {
        value:
          parsedOptions.marketplace === Marketplace.Wb ? client : undefined,
      },
    });
  }
}

function parseSellerClientOptions(input: unknown): SellerClientOptions {
  const record =
    typeof input === "object" && input !== null && !Array.isArray(input)
      ? (input as Record<string, unknown>)
      : undefined;
  const schema =
    record?.["marketplace"] === Marketplace.Wb
      ? wbSellerClientOptionsSchema
      : ozonSellerClientOptionsSchema;
  const result = schema.safeParse(
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
