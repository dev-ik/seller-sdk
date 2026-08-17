import { createRequestSignal, throwIfAborted, waitForDelay } from "./abort.js";
import {
  calculateRetryDelay,
  isRetryableStatus,
  normalizeRetryOptions,
  parseRetryAfter,
} from "./retry-policy.js";
import { parseJsonResponse } from "./response-parser.js";
import type {
  RetryOptions,
  Transport,
  TransportRequest,
  TransportResponse,
  TransportResponseMetadata,
} from "./transport.js";
import { ApiError } from "../errors/api-error.js";
import { AuthenticationError } from "../errors/authentication-error.js";
import { ConfigurationError } from "../errors/configuration-error.js";
import { NetworkError } from "../errors/network-error.js";
import { RateLimitError } from "../errors/rate-limit-error.js";
import { SellerSdkError } from "../errors/seller-sdk-error.js";
import { TimeoutError } from "../errors/timeout-error.js";

const DEFAULT_API_ORIGIN = "https://api-seller.ozon.ru";
const DEFAULT_API_NAME = "Ozon API";
const DEFAULT_TIMEOUT_MS = 30_000;
const DEFAULT_DEADLINE_MS = 60_000;

export interface FetchTransportOptions {
  /** Fixed API origin. Requests can never escape this origin. */
  readonly baseUrl?: string;
  /** Marketplace API name used in safe error messages. */
  readonly apiName?: string;
  readonly defaultHeaders?: Readonly<Record<string, string>>;
  readonly defaultTimeoutMs?: number;
  readonly defaultDeadlineMs?: number;
  readonly defaultRetry?: RetryOptions;
  readonly onResponse?: (metadata: TransportResponseMetadata) => void;
  readonly fetchImplementation?: typeof fetch;
  readonly random?: () => number;
  readonly now?: () => number;
}

export class FetchTransport implements Transport {
  readonly #apiOrigin: string;
  readonly #apiName: string;
  readonly #defaultHeaders: Readonly<Record<string, string>>;
  readonly #fetch: typeof fetch;
  readonly #random: () => number;
  readonly #now: () => number;
  readonly #defaultTimeoutMs: number;
  readonly #defaultDeadlineMs: number;
  readonly #defaultRetry: RetryOptions;
  readonly #onResponse:
    | ((metadata: TransportResponseMetadata) => void)
    | undefined;

  constructor(options: FetchTransportOptions = {}) {
    this.#apiOrigin = parseApiOrigin(options.baseUrl ?? DEFAULT_API_ORIGIN);
    this.#apiName = options.apiName ?? DEFAULT_API_NAME;
    this.#defaultHeaders = Object.freeze({ ...options.defaultHeaders });
    this.#fetch = options.fetchImplementation ?? globalThis.fetch;
    this.#random = options.random ?? Math.random;
    this.#now = options.now ?? Date.now;
    this.#defaultTimeoutMs = options.defaultTimeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.#defaultDeadlineMs = options.defaultDeadlineMs ?? DEFAULT_DEADLINE_MS;
    this.#defaultRetry = Object.freeze({ ...options.defaultRetry });
    this.#onResponse = options.onResponse;
  }

  async request(request: TransportRequest): Promise<TransportResponse> {
    const url = resolveFixedOriginUrl(
      request.path,
      this.#apiOrigin,
      this.#apiName,
    );
    const serializedBody = serializeRequestBody(request);
    const retry = normalizeRetryOptions(request.retrySafety, {
      ...this.#defaultRetry,
      ...request.retry,
    });
    const startedAt = this.#now();
    const deadlineMs = request.deadlineMs ?? this.#defaultDeadlineMs;

    for (let attempt = 1; attempt <= retry.maxAttempts; attempt += 1) {
      throwIfAborted(request.signal);
      const elapsedMs = this.#now() - startedAt;
      const remainingMs = deadlineMs - elapsedMs;

      if (remainingMs <= 0) {
        throw new TimeoutError(
          `${this.#apiName} deadline exceeded for operation ${request.operationId}.`,
          {
            operationId: request.operationId,
            timeoutMs: deadlineMs,
          },
        );
      }

      const attemptTimeoutMs = Math.min(
        request.timeoutMs ?? this.#defaultTimeoutMs,
        remainingMs,
      );
      const requestSignal = createRequestSignal({
        ...(request.signal === undefined
          ? {}
          : { callerSignal: request.signal }),
        timeoutMs: attemptTimeoutMs,
      });

      try {
        const response = await this.#fetch(
          url,
          createFetchInit(
            request,
            serializedBody,
            this.#defaultHeaders,
            requestSignal.signal,
          ),
        );
        const body =
          response.ok && shouldReadArrayBuffer(request, response)
            ? await response.arrayBuffer()
            : await parseJsonResponse(
                response,
                request.operationId,
                this.#apiName,
              );

        if (response.ok) {
          const metadata = createResponseMetadata({
            response,
            operationId: request.operationId,
            attempt,
            durationMs: this.#now() - startedAt,
            willRetry: false,
          });
          this.#notifyResponse(metadata);
          return {
            status: response.status,
            headers: response.headers,
            body,
            metadata,
          };
        }

        const retryAfterMs = parseRetryAfter(
          response.headers.get("retry-after"),
          this.#now(),
        );
        const error = createApiError(
          response,
          body,
          request.operationId,
          retryAfterMs,
          this.#apiName,
        );

        const willRetry =
          request.retrySafety === "safe" &&
          isRetryableStatus(response.status) &&
          attempt < retry.maxAttempts;
        this.#notifyResponse(
          createResponseMetadata({
            response,
            operationId: request.operationId,
            attempt,
            durationMs: this.#now() - startedAt,
            ...(retryAfterMs === undefined ? {} : { retryAfterMs }),
            willRetry,
          }),
        );

        if (willRetry) {
          const delayMs = calculateRetryDelay(
            attempt,
            retry,
            retryAfterMs,
            this.#random,
          );
          await this.#waitWithinDeadline(
            delayMs,
            startedAt,
            deadlineMs,
            request,
          );
          continue;
        }

        throw error;
      } catch (cause) {
        if (request.signal?.aborted) throw request.signal.reason;
        if (cause instanceof ApiError || cause instanceof SellerSdkError)
          throw cause;

        const error = requestSignal.didTimeout()
          ? new TimeoutError(
              `${this.#apiName} request timed out for operation ${request.operationId}.`,
              {
                operationId: request.operationId,
                timeoutMs: attemptTimeoutMs,
                cause,
              },
            )
          : new NetworkError(
              `${this.#apiName} network failure for operation ${request.operationId}.`,
              {
                operationId: request.operationId,
                cause,
              },
            );

        if (request.retrySafety === "safe" && attempt < retry.maxAttempts) {
          const delayMs = calculateRetryDelay(
            attempt,
            retry,
            undefined,
            this.#random,
          );
          await this.#waitWithinDeadline(
            delayMs,
            startedAt,
            deadlineMs,
            request,
          );
          continue;
        }

        throw error;
      } finally {
        requestSignal.dispose();
      }
    }

    throw new NetworkError(
      `${this.#apiName} request failed for operation ${request.operationId}.`,
      {
        operationId: request.operationId,
      },
    );
  }

  async #waitWithinDeadline(
    delayMs: number,
    startedAt: number,
    deadlineMs: number,
    request: TransportRequest,
  ): Promise<void> {
    const remainingMs = deadlineMs - (this.#now() - startedAt);
    if (delayMs >= remainingMs) {
      throw new TimeoutError(
        `${this.#apiName} deadline exceeded for operation ${request.operationId}.`,
        {
          operationId: request.operationId,
          timeoutMs: deadlineMs,
        },
      );
    }

    await waitForDelay(delayMs, request.signal);
  }

  #notifyResponse(metadata: TransportResponseMetadata): void {
    if (this.#onResponse === undefined) return;
    try {
      this.#onResponse(metadata);
    } catch {
      // Observability hooks must never change request behavior.
    }
  }
}

function parseApiOrigin(baseUrl: string): string {
  const url = new URL(baseUrl);
  if (url.pathname !== "/" || url.search.length > 0 || url.hash.length > 0) {
    throw new ConfigurationError("API base URL must contain only an origin.");
  }
  return url.origin;
}

function resolveFixedOriginUrl(
  path: string,
  apiOrigin: string,
  apiName: string,
): URL {
  if (!path.startsWith("/") || path.startsWith("//")) {
    throw new ConfigurationError(
      `${apiName} endpoint path must be an absolute path on the fixed API origin.`,
    );
  }

  const url = new URL(path, apiOrigin);
  if (url.origin !== apiOrigin) {
    throw new ConfigurationError(
      `${apiName} endpoint path resolved outside the fixed API origin.`,
    );
  }

  return url;
}

function createFetchInit(
  request: TransportRequest,
  serializedBody: BodyInit | undefined,
  defaultHeaders: Readonly<Record<string, string>>,
  signal: AbortSignal,
): RequestInit {
  const hasBody = serializedBody !== undefined;
  const headers = new Headers({
    Accept:
      request.accept ??
      (request.responseType === "array-buffer"
        ? "application/pdf"
        : "application/json"),
    ...defaultHeaders,
    ...request.headers,
    ...(hasBody && request.bodyEncoding !== "form-data"
      ? { "Content-Type": "application/json" }
      : {}),
  });

  return {
    method: request.method,
    headers,
    signal,
    ...(hasBody ? { body: serializedBody } : {}),
  };
}

function shouldReadArrayBuffer(
  request: TransportRequest,
  response: Response,
): boolean {
  if (request.responseType === "array-buffer") return true;
  if (request.responseType !== "auto") return false;
  const contentType = response.headers.get("content-type")?.toLowerCase();
  return contentType !== undefined && !contentType.includes("json");
}

function serializeRequestBody(request: TransportRequest): BodyInit | undefined {
  const { body, operationId } = request;
  if (body === undefined) return undefined;

  if (request.bodyEncoding === "form-data") {
    if (!(body instanceof FormData)) {
      throw new ConfigurationError(
        `Form-data body must be a FormData instance for operation ${operationId}.`,
      );
    }
    return body;
  }

  try {
    const serialized = JSON.stringify(body);
    if (serialized === undefined) {
      throw new TypeError("Request body is not JSON serializable.");
    }
    return serialized;
  } catch (cause) {
    throw new ConfigurationError(
      `Request body is not JSON serializable for operation ${operationId}.`,
      [],
      { cause },
    );
  }
}

function createApiError(
  response: Response,
  body: unknown,
  operationId: string,
  retryAfterMs: number | undefined,
  apiName: string,
): ApiError {
  const requestId = readRequestId(response.headers);
  const apiCode = readScalar(body, "code");
  const apiMessage = readApiMessage(body);
  const message = `${apiName} rejected operation ${operationId} with HTTP ${response.status}${apiMessage === undefined ? "." : `: ${apiMessage}`}`;
  const options = {
    status: response.status,
    operationId,
    ...(requestId === undefined ? {} : { requestId }),
    ...(apiCode === undefined ? {} : { apiCode }),
    ...(apiMessage === undefined ? {} : { apiMessage }),
    ...(retryAfterMs === undefined ? {} : { retryAfterMs }),
  };

  if (response.status === 401 || response.status === 403) {
    return new AuthenticationError(message, options);
  }
  if (response.status === 429) {
    return new RateLimitError(message, options);
  }
  return new ApiError(message, options);
}

function createResponseMetadata(options: {
  readonly response: Response;
  readonly operationId: string;
  readonly attempt: number;
  readonly durationMs: number;
  readonly retryAfterMs?: number;
  readonly willRetry: boolean;
}): TransportResponseMetadata {
  const requestId = readRequestId(options.response.headers);
  return Object.freeze({
    operationId: options.operationId,
    status: options.response.status,
    ...(requestId === undefined ? {} : { requestId }),
    attempt: options.attempt,
    durationMs: Math.max(0, options.durationMs),
    ...(options.retryAfterMs === undefined
      ? {}
      : { retryAfterMs: options.retryAfterMs }),
    willRetry: options.willRetry,
    headers: Object.freeze(Object.fromEntries(options.response.headers)),
  });
}

function readRequestId(headers: Headers): string | undefined {
  return headers.get("x-request-id") ?? undefined;
}

function readApiMessage(body: unknown): string | undefined {
  const message =
    readScalar(body, "message") ??
    readScalar(body, "detail") ??
    readScalar(body, "title");
  if (message === undefined) return undefined;
  const normalized = message.replace(/[\r\n\t]+/g, " ").trim();
  if (normalized.length === 0) return undefined;
  return normalized.length <= 500 ? normalized : `${normalized.slice(0, 499)}…`;
}

function readScalar(body: unknown, key: string): string | undefined {
  if (typeof body !== "object" || body === null || Array.isArray(body))
    return undefined;
  const value = (body as Record<string, unknown>)[key];
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }
  return undefined;
}
