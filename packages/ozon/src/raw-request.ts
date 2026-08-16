import type { HttpMethod, RetrySafety } from "#internal-core";
import type { OzonResponseMetadata } from "./configuration.js";
import type { OzonRequestOptions } from "./request-options.js";

export type OzonRawRequestMethod = Extract<HttpMethod, "GET" | "POST">;

export interface OzonRawRequestOptions extends OzonRequestOptions {
  /** Безопасные GET/read-only запросы можно повторять; по умолчанию повторы отключены. */
  readonly retrySafety?: RetrySafety;
  readonly responseType?: "json" | "array-buffer";
}

export interface OzonRawResponse<T> {
  readonly data: T;
  readonly lastResponse: OzonResponseMetadata;
}
