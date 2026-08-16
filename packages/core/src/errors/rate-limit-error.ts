import { ApiError, type ApiErrorOptions } from "./api-error.js";

export class RateLimitError extends ApiError {
  override readonly name = "RateLimitError";
  override readonly code = "rate_limit_error" as const;

  constructor(message: string, options: ApiErrorOptions) {
    super(message, options);
  }
}
