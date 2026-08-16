import {
  ConfigurationError,
  FetchTransport,
  type Transport,
  type TransportResponseMetadata,
} from "#internal-core";
import { createOzonAuthHeaders } from "./auth.js";
import {
  parseOzonClientConfig,
  type OzonClientConfig,
} from "./configuration.js";
import { parseOzonCredentials, type OzonCredentials } from "./credentials.js";
import { createOzonDomainApi, type OzonDomainApi } from "./domain-api.js";
import { OzonOperations } from "./operations.js";
import type {
  OzonRawRequestMethod,
  OzonRawRequestOptions,
  OzonRawResponse,
} from "./raw-request.js";
import { toTransportRequestOptions } from "./request-options.js";

export class OzonClient {
  readonly #transport: Transport;
  declare readonly domains: OzonDomainApi;

  declare readonly access: OzonDomainApi["access"];
  declare readonly actions: OzonDomainApi["actions"];
  declare readonly analytics: OzonDomainApi["analytics"];
  declare readonly barcodes: OzonDomainApi["barcodes"];
  declare readonly brands: OzonDomainApi["brands"];
  declare readonly cancellations: OzonDomainApi["cancellations"];
  declare readonly cargoes: OzonDomainApi["cargoes"];
  declare readonly carriages: OzonDomainApi["carriages"];
  declare readonly categories: OzonDomainApi["categories"];
  declare readonly chats: OzonDomainApi["chats"];
  declare readonly deliveries: OzonDomainApi["deliveries"];
  declare readonly deliveryMethods: OzonDomainApi["deliveryMethods"];
  declare readonly digital: OzonDomainApi["digital"];
  declare readonly fbp: OzonDomainApi["fbp"];
  declare readonly finance: OzonDomainApi["finance"];
  declare readonly invoices: OzonDomainApi["invoices"];
  declare readonly notifications: OzonDomainApi["notifications"];
  declare readonly orders: OzonDomainApi["orders"];
  declare readonly passes: OzonDomainApi["passes"];
  declare readonly polygons: OzonDomainApi["polygons"];
  declare readonly postings: OzonDomainApi["postings"];
  declare readonly pricingStrategies: OzonDomainApi["pricingStrategies"];
  declare readonly products: OzonDomainApi["products"];
  declare readonly promotions: OzonDomainApi["promotions"];
  declare readonly questions: OzonDomainApi["questions"];
  declare readonly ratings: OzonDomainApi["ratings"];
  declare readonly receipts: OzonDomainApi["receipts"];
  declare readonly removals: OzonDomainApi["removals"];
  declare readonly reports: OzonDomainApi["reports"];
  declare readonly returns: OzonDomainApi["returns"];
  declare readonly reviews: OzonDomainApi["reviews"];
  declare readonly searchQueries: OzonDomainApi["searchQueries"];
  declare readonly seller: OzonDomainApi["seller"];
  declare readonly sellerActions: OzonDomainApi["sellerActions"];
  declare readonly suppliers: OzonDomainApi["suppliers"];
  declare readonly supplyDrafts: OzonDomainApi["supplyDrafts"];
  declare readonly supplyOrders: OzonDomainApi["supplyOrders"];
  declare readonly warehouses: OzonDomainApi["warehouses"];

  constructor(credentials: OzonCredentials, config: OzonClientConfig = {}) {
    const parsedCredentials = parseOzonCredentials(credentials);
    const parsedConfig = parseOzonClientConfig(config);
    const transport = new FetchTransport({
      defaultHeaders: createOzonAuthHeaders(parsedCredentials),
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
    this.#transport = transport;
    const operations = new OzonOperations(transport);
    const domains = createOzonDomainApi(operations);

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
   * Выполняет запрос к ещё не добавленному в SDK методу Ozon на фиксированном
   * `https://api-seller.ozon.ru`. Ответ не проходит endpoint-specific SafeShape-валидацию.
   */
  async rawRequest<T = unknown>(
    method: OzonRawRequestMethod,
    path: string,
    body?: unknown,
    options: OzonRawRequestOptions = {},
  ): Promise<OzonRawResponse<T>> {
    if (method === "GET" && body !== undefined) {
      throw new ConfigurationError(
        "Ozon raw GET requests do not accept a request body.",
      );
    }

    const operationId = `RawRequest:${method}:${path}`;
    const response = await this.#transport.request({
      operationId,
      method,
      path,
      ...(body === undefined ? {} : { body }),
      retrySafety: options.retrySafety ?? "unsafe",
      ...(options.responseType === undefined
        ? {}
        : { responseType: options.responseType }),
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
  response: {
    readonly status: number;
    readonly headers: Headers;
  },
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
