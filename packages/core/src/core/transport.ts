export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type RetrySafety = "safe" | "unsafe";

export interface RetryOptions {
  readonly maxAttempts?: number;
  readonly baseDelayMs?: number;
  readonly maxDelayMs?: number;
}

export interface TransportResponseMetadata {
  readonly operationId: string;
  readonly status: number;
  readonly requestId?: string;
  readonly attempt: number;
  readonly durationMs: number;
  readonly retryAfterMs?: number;
  readonly willRetry: boolean;
  readonly headers: Readonly<Record<string, string>>;
}

export interface TransportRequest {
  readonly operationId: string;
  readonly method: HttpMethod;
  readonly path: string;
  readonly headers?: Readonly<Record<string, string>>;
  readonly body?: unknown;
  readonly bodyEncoding?: "json" | "form-data";
  readonly accept?: string;
  readonly responseType?: "json" | "array-buffer" | "auto";
  readonly signal?: AbortSignal;
  readonly timeoutMs?: number;
  readonly deadlineMs?: number;
  readonly retrySafety: RetrySafety;
  readonly retry?: RetryOptions;
}

export interface TransportResponse {
  readonly status: number;
  readonly headers: Headers;
  readonly body: unknown;
  readonly metadata?: TransportResponseMetadata;
}

export interface Transport {
  request(request: TransportRequest): Promise<TransportResponse>;
}
