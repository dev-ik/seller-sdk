import { SellerSdkError } from "./seller-sdk-error.js";
import type { ValidationIssue } from "./validation-issue.js";

export class ConfigurationError extends SellerSdkError {
  override readonly name = "ConfigurationError";
  readonly issues: readonly ValidationIssue[];

  constructor(
    message: string,
    issues: readonly ValidationIssue[] = [],
    options?: ErrorOptions,
  ) {
    super(message, { code: "configuration_error", ...options });
    this.issues = Object.freeze([...issues]);
  }
}
