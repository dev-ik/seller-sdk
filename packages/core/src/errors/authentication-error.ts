import { ApiError, type ApiErrorOptions } from "./api-error.js";

export class AuthenticationError extends ApiError {
  override readonly name = "AuthenticationError";
  override readonly code = "authentication_error" as const;

  constructor(message: string, options: ApiErrorOptions) {
    super(message, options);
  }
}
