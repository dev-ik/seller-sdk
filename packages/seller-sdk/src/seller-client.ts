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
import { YmClient, type YmCredentials } from "@seller-sdk/ym";
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

const ymCredentialsSchema: Schema<YmCredentials> = object({
  apiKey: nonEmptyString,
});

const ozonSellerClientOptionsSchema = object({
  marketplace: literal(Marketplace.Ozon),
  credentials: ozonCredentialsSchema,
});

const wbSellerClientOptionsSchema = object({
  marketplace: literal(Marketplace.Wb),
  credentials: wbCredentialsSchema,
});

const ymSellerClientOptionsSchema = object({
  marketplace: literal(Marketplace.Ym),
  credentials: ymCredentialsSchema,
});

export class SellerClient<const M extends MarketplaceName = MarketplaceName> {
  readonly marketplace: M;
  readonly client: MarketplaceRegistry[M]["client"];
  declare readonly ozon: M extends typeof Marketplace.Ozon
    ? OzonClient
    : undefined;
  declare readonly wb: M extends typeof Marketplace.Wb ? WbClient : undefined;
  declare readonly ym: M extends typeof Marketplace.Ym ? YmClient : undefined;

  constructor(options: SellerClientOptions<M>) {
    const parsedOptions = parseSellerClientOptions(options);
    this.marketplace = parsedOptions.marketplace as M;

    const client = createMarketplaceClient(parsedOptions);
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
      ym: {
        value:
          parsedOptions.marketplace === Marketplace.Ym ? client : undefined,
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
      : record?.["marketplace"] === Marketplace.Ym
        ? ymSellerClientOptionsSchema
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

function createMarketplaceClient(options: SellerClientOptions) {
  switch (options.marketplace) {
    case Marketplace.Ozon:
      return new OzonClient(options.credentials, options.config);
    case Marketplace.Wb:
      return new WbClient(options.credentials, options.config);
    case Marketplace.Ym:
      return new YmClient(options.credentials, options.config);
  }
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
