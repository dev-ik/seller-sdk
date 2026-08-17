import {
  ConfigurationError,
  FetchTransport,
  type Transport,
  type TransportResponseMetadata,
} from "#internal-core";
import { createWbAuthHeaders } from "./auth.js";
import {
  createWbDomainApi,
  WB_API_ORIGINS,
  type WbApiOrigin,
  type WbDomainApi,
} from "./api.generated.js";
import { parseWbClientConfig, type WbClientConfig } from "./configuration.js";
import { parseWbCredentials, type WbCredentials } from "./credentials.js";
import { createWbOperationExecutor } from "./operation.js";
import type {
  WbRawRequestMethod,
  WbRawRequestOptions,
  WbRawResponse,
} from "./raw-request.js";
import { toTransportRequestOptions } from "./request-options.js";

export class WbClient {
  readonly #transports = new Map<string, Transport>();
  readonly #getTransport: (origin: string) => Transport;
  declare readonly domains: WbDomainApi;

  declare readonly general: WbDomainApi["general"];
  declare readonly items: WbDomainApi["items"];
  declare readonly ordersFbs: WbDomainApi["ordersFbs"];
  declare readonly ordersDbw: WbDomainApi["ordersDbw"];
  declare readonly dbs: WbDomainApi["dbs"];
  declare readonly inStorePickup: WbDomainApi["inStorePickup"];
  declare readonly ordersFbw: WbDomainApi["ordersFbw"];
  declare readonly promotion: WbDomainApi["promotion"];
  declare readonly communications: WbDomainApi["communications"];
  declare readonly rates: WbDomainApi["rates"];
  declare readonly analytics: WbDomainApi["analytics"];
  declare readonly reports: WbDomainApi["reports"];
  declare readonly finances: WbDomainApi["finances"];

  constructor(credentials: WbCredentials, config: WbClientConfig = {}) {
    const parsedCredentials = parseWbCredentials(credentials);
    const parsedConfig = parseWbClientConfig(config);
    const allowedOrigins = new Set<string>(WB_API_ORIGINS);
    const getTransport = (origin: string): Transport => {
      if (!allowedOrigins.has(origin)) {
        throw new ConfigurationError(
          "Wildberries operation resolved outside documented API origins.",
        );
      }
      const existing = this.#transports.get(origin);
      if (existing !== undefined) return existing;

      const transport = new FetchTransport({
        baseUrl: origin,
        apiName: "Wildberries API",
        defaultHeaders: createWbAuthHeaders(parsedCredentials),
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
    const execute = createWbOperationExecutor({
      environment: parsedConfig.environment ?? "production",
      getTransport,
    });
    const domains = createWbDomainApi(execute);

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
   * Calls a not-yet-generated WB endpoint on an exact documented WB origin.
   * The response intentionally skips endpoint-specific SafeShape validation.
   */
  async rawRequest<T = unknown>(
    origin: WbApiOrigin,
    method: WbRawRequestMethod,
    path: string,
    body?: unknown,
    options: WbRawRequestOptions = {},
  ): Promise<WbRawResponse<T>> {
    if (method === "GET" && body !== undefined) {
      throw new ConfigurationError(
        "Wildberries raw GET requests do not accept a request body.",
      );
    }

    const operationId = `RawRequest:${method}:${path}`;
    const response = await this.#getTransport(origin).request({
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
