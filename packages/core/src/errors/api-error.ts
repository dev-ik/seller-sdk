import { SellerSdkError } from "./seller-sdk-error.js";

export interface ApiErrorOptions extends ErrorOptions {
  readonly status: number;
  readonly operationId: string;
  readonly requestId?: string;
  readonly apiCode?: string;
  readonly apiMessage?: string;
  readonly retryAfterMs?: number;
}

export class ApiError extends SellerSdkError {
  override readonly name: string = "ApiError";
  readonly status: number;
  readonly operationId: string;
  readonly requestId?: string;
  readonly apiCode?: string;
  readonly apiMessage?: string;
  readonly retryAfterMs?: number;

  constructor(message: string, options: ApiErrorOptions) {
    super(message, { code: "api_error", cause: options.cause });
    this.status = options.status;
    this.operationId = options.operationId;
    if (options.requestId !== undefined) this.requestId = options.requestId;
    if (options.apiCode !== undefined) this.apiCode = options.apiCode;
    if (options.apiMessage !== undefined) this.apiMessage = options.apiMessage;
    if (options.retryAfterMs !== undefined)
      this.retryAfterMs = options.retryAfterMs;
  }
}
