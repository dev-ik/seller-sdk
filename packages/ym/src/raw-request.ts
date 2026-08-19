import type { HttpMethod, RetrySafety } from "#internal-core";
import type { YmResponseMetadata } from "./configuration.js";
import type { YmRequestOptions } from "./request-options.js";

export type YmRawRequestMethod = HttpMethod;

export interface YmRawRequestOptions extends YmRequestOptions {
  /** Raw requests are not retried unless explicitly marked safe. */
  readonly retrySafety?: RetrySafety;
  readonly responseType?: "json" | "array-buffer" | "auto";
  readonly accept?: string;
}

export interface YmRawResponse<T> {
  readonly data: T;
  readonly lastResponse: YmResponseMetadata;
}
