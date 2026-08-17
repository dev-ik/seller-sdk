import type { HttpMethod, RetrySafety } from "#internal-core";
import type { WbApiOrigin } from "./api.generated.js";
import type { WbResponseMetadata } from "./configuration.js";
import type { WbRequestOptions } from "./request-options.js";

export type WbRawRequestMethod = HttpMethod;

export interface WbRawRequestOptions extends WbRequestOptions {
  /** Raw requests are not retried unless explicitly marked safe. */
  readonly retrySafety?: RetrySafety;
  readonly responseType?: "json" | "array-buffer" | "auto";
  readonly accept?: string;
}

export interface WbRawResponse<T> {
  readonly data: T;
  readonly lastResponse: WbResponseMetadata;
}

export type WbRawRequestOrigin = WbApiOrigin;
