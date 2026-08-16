import { SellerSdkError } from "./seller-sdk-error.js";
import type { ValidationIssue } from "./validation-issue.js";

export interface ResponseValidationErrorOptions extends ErrorOptions {
  readonly operationId: string;
  readonly issues: readonly ValidationIssue[];
}

export class ResponseValidationError extends SellerSdkError {
  override readonly name = "ResponseValidationError";
  readonly operationId: string;
  readonly issues: readonly ValidationIssue[];

  constructor(message: string, options: ResponseValidationErrorOptions) {
    super(message, { code: "response_validation_error", cause: options.cause });
    this.operationId = options.operationId;
    this.issues = Object.freeze([...options.issues]);
  }
}
