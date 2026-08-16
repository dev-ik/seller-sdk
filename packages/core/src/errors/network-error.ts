import { SellerSdkError } from "./seller-sdk-error.js";

export interface NetworkErrorOptions extends ErrorOptions {
  readonly operationId: string;
}

export class NetworkError extends SellerSdkError {
  override readonly name = "NetworkError";
  readonly operationId: string;

  constructor(message: string, options: NetworkErrorOptions) {
    super(message, { code: "network_error", cause: options.cause });
    this.operationId = options.operationId;
  }
}
