export type SellerSdkErrorCode =
  | "configuration_error"
  | "api_error"
  | "authentication_error"
  | "rate_limit_error"
  | "network_error"
  | "timeout_error"
  | "response_validation_error";

export interface SellerSdkErrorOptions extends ErrorOptions {
  readonly code: SellerSdkErrorCode;
}

export class SellerSdkError extends Error {
  override readonly name: string = "SellerSdkError";
  readonly code: SellerSdkErrorCode;

  constructor(message: string, options: SellerSdkErrorOptions) {
    super(message, options);
    this.code = options.code;
  }
}
