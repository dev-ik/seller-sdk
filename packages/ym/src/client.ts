import {
  ConfigurationError,
  FetchTransport,
  type Transport,
  type TransportResponseMetadata,
} from "#internal-core";
import { createYmAuthHeaders } from "./auth.js";
import {
  createYmDomainApi,
  YM_API_ORIGINS,
  type YmDomainApi,
} from "./api.generated.js";
import { parseYmClientConfig, type YmClientConfig } from "./configuration.js";
import { parseYmCredentials, type YmCredentials } from "./credentials.js";
import { createYmOperationExecutor } from "./operation.js";
import type {
  YmRawRequestMethod,
  YmRawRequestOptions,
  YmRawResponse,
} from "./raw-request.js";
import { toTransportRequestOptions } from "./request-options.js";

export class YmClient {
  readonly #transports = new Map<string, Transport>();
  readonly #getTransport: (origin: string) => Transport;
  declare readonly domains: YmDomainApi;

  declare readonly auth: YmDomainApi["auth"];
  declare readonly bids: YmDomainApi["bids"];
  declare readonly businesses: YmDomainApi["businesses"];
  declare readonly businessOfferMappings: YmDomainApi["businessOfferMappings"];
  declare readonly campaigns: YmDomainApi["campaigns"];
  declare readonly categories: YmDomainApi["categories"];
  declare readonly chats: YmDomainApi["chats"];
  declare readonly content: YmDomainApi["content"];
  declare readonly deliveryOptions: YmDomainApi["deliveryOptions"];
  declare readonly deliveryServices: YmDomainApi["deliveryServices"];
  declare readonly goodsFeedback: YmDomainApi["goodsFeedback"];
  declare readonly goodsQuestions: YmDomainApi["goodsQuestions"];
  declare readonly goodsStats: YmDomainApi["goodsStats"];
  declare readonly hiddenOffers: YmDomainApi["hiddenOffers"];
  declare readonly logisticPoints: YmDomainApi["logisticPoints"];
  declare readonly offers: YmDomainApi["offers"];
  declare readonly operations: YmDomainApi["operations"];
  declare readonly orderBusinessInformation: YmDomainApi["orderBusinessInformation"];
  declare readonly orderDelivery: YmDomainApi["orderDelivery"];
  declare readonly orderLabels: YmDomainApi["orderLabels"];
  declare readonly orders: YmDomainApi["orders"];
  declare readonly ordersStats: YmDomainApi["ordersStats"];
  declare readonly outletLicenses: YmDomainApi["outletLicenses"];
  declare readonly outlets: YmDomainApi["outlets"];
  declare readonly priceQuarantine: YmDomainApi["priceQuarantine"];
  declare readonly prices: YmDomainApi["prices"];
  declare readonly promos: YmDomainApi["promos"];
  declare readonly ratings: YmDomainApi["ratings"];
  declare readonly regions: YmDomainApi["regions"];
  declare readonly reports: YmDomainApi["reports"];
  declare readonly returns: YmDomainApi["returns"];
  declare readonly shipments: YmDomainApi["shipments"];
  declare readonly stocks: YmDomainApi["stocks"];
  declare readonly supplyRequests: YmDomainApi["supplyRequests"];
  declare readonly tariffs: YmDomainApi["tariffs"];
  declare readonly warehouses: YmDomainApi["warehouses"];

  constructor(credentials: YmCredentials, config: YmClientConfig = {}) {
    const parsedCredentials = parseYmCredentials(credentials);
    const parsedConfig = parseYmClientConfig(config);
    const allowedOrigins = new Set<string>(YM_API_ORIGINS);
    const getTransport = (origin: string): Transport => {
      if (!allowedOrigins.has(origin)) {
        throw new ConfigurationError(
          "Yandex Market operation resolved outside documented API origins.",
        );
      }
      const existing = this.#transports.get(origin);
      if (existing !== undefined) return existing;

      const transport = new FetchTransport({
        baseUrl: origin,
        apiName: "Yandex Market API",
        defaultHeaders: createYmAuthHeaders(parsedCredentials),
        parseApiError: parseYmApiError,
        rateLimitStatuses: [420, 429],
        ...(parsedConfig.timeoutMs === undefined
          ? {}
          : { defaultTimeoutMs: parsedConfig.timeoutMs }),
        ...(parsedConfig.deadlineMs === undefined
          ? {}
          : { defaultDeadlineMs: parsedConfig.deadlineMs }),
        ...(parsedConfig.maxRetries === undefined
          ? {}
          : { defaultRetry: { maxAttempts: parsedConfig.maxRetries + 1 } }),
        ...(parsedConfig.onResponse === undefined
          ? {}
          : { onResponse: parsedConfig.onResponse }),
      });
      this.#transports.set(origin, transport);
      return transport;
    };
    this.#getTransport = getTransport;
    const execute = createYmOperationExecutor({ getTransport });
    const domains = createYmDomainApi(execute);

    Object.defineProperty(this, "domains", { value: domains });
    Object.defineProperties(
      this,
      Object.fromEntries(
        Object.entries(domains).map(([domainName, domain]) => [
          domainName,
          { value: domain },
        ]),
      ),
    );
  }

  /**
   * Calls a not-yet-generated YM endpoint on an exact documented YM origin.
   * The response intentionally skips endpoint-specific SafeShape validation.
   */
  async rawRequest<T = unknown>(
    method: YmRawRequestMethod,
    path: string,
    body?: unknown,
    options: YmRawRequestOptions = {},
  ): Promise<YmRawResponse<T>> {
    if (method === "GET" && body !== undefined) {
      throw new ConfigurationError(
        "Yandex Market raw GET requests do not accept a request body.",
      );
    }

    const operationId = `RawRequest:${method}:${path}`;
    const response = await this.#getTransport(YM_API_ORIGINS[0]).request({
      operationId,
      method,
      path,
      ...(body === undefined ? {} : { body }),
      retrySafety: options.retrySafety ?? "unsafe",
      ...(options.responseType === undefined
        ? {}
        : { responseType: options.responseType }),
      ...(options.accept === undefined ? {} : { accept: options.accept }),
      ...toTransportRequestOptions(options),
    });

    return Object.freeze({
      data: response.body as T,
      lastResponse:
        response.metadata ?? fallbackResponseMetadata(response, operationId),
    });
  }
}

function parseYmApiError(body: unknown): {
  readonly apiCode?: string;
  readonly apiMessage?: string;
} {
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return {};
  }
  const errors = (body as Record<string, unknown>)["errors"];
  if (!Array.isArray(errors)) return {};
  const first = errors.find(
    (item): item is Record<string, unknown> =>
      typeof item === "object" && item !== null && !Array.isArray(item),
  );
  if (first === undefined) return {};
  const code = first["code"];
  const message = first["message"];
  return {
    ...(typeof code === "string" || typeof code === "number"
      ? { apiCode: String(code) }
      : {}),
    ...(typeof message === "string"
      ? {
          apiMessage: message
            .replace(/[\r\n\t]+/gu, " ")
            .trim()
            .slice(0, 500),
        }
      : {}),
  };
}

function fallbackResponseMetadata(
  response: { readonly status: number; readonly headers: Headers },
  operationId: string,
): TransportResponseMetadata {
  const requestId = response.headers.get("x-request-id") ?? undefined;
  return Object.freeze({
    operationId,
    status: response.status,
    ...(requestId === undefined ? {} : { requestId }),
    attempt: 1,
    durationMs: 0,
    willRetry: false,
    headers: Object.freeze(Object.fromEntries(response.headers)),
  });
}
