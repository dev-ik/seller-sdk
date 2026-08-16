import { SellerSdkError } from "./seller-sdk-error.js";

export interface TimeoutErrorOptions extends ErrorOptions {
  readonly operationId: string;
  readonly timeoutMs: number;
}

export class TimeoutError extends SellerSdkError {
  override readonly name = "TimeoutError";
  readonly operationId: string;
  readonly timeoutMs: number;

  constructor(message: string, options: TimeoutErrorOptions) {
    super(message, { code: "timeout_error", cause: options.cause });
    this.operationId = options.operationId;
    this.timeoutMs = options.timeoutMs;
  }
}
