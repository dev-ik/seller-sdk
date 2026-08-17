import { describe, expect, it } from "vitest";
import {
  AuthenticationError,
  ConfigurationError,
  toSellerSdkErrorDetails,
} from "../../packages/seller-sdk/src/index.js";

describe("toSellerSdkErrorDetails", () => {
  it("normalizes API errors into a stable serializable shape", () => {
    const error = new AuthenticationError("Token rejected.", {
      status: 401,
      operationId: "getPing",
      requestId: "request-id",
      apiCode: "invalid-token",
      apiMessage: "The access token is malformed.",
    });

    expect(toSellerSdkErrorDetails(error)).toEqual({
      isSellerSdkError: true,
      name: "AuthenticationError",
      code: "authentication_error",
      message: "Token rejected.",
      operationId: "getPing",
      status: 401,
      requestId: "request-id",
      apiCode: "invalid-token",
      apiMessage: "The access token is malformed.",
    });
  });

  it("works structurally across independently embedded core copies", () => {
    const details = toSellerSdkErrorDetails({
      name: "RateLimitError",
      code: "rate_limit_error",
      message: "Too many requests.",
      operationId: "listOrders",
      status: 429,
      retryAfterMs: 5_000,
      authorization: "must-not-appear",
      headers: { Authorization: "must-not-appear" },
      cause: new Error("must-not-appear"),
    });

    expect(details).toMatchObject({
      isSellerSdkError: true,
      code: "rate_limit_error",
      operationId: "listOrders",
      status: 429,
      retryAfterMs: 5_000,
    });
    expect(JSON.stringify(details)).not.toContain("must-not-appear");
  });

  it("preserves validated issues and handles unknown errors", () => {
    const configurationError = new ConfigurationError("Invalid config.", [
      {
        code: "required",
        path: ["credentials", "token"],
        message: "Expected a token.",
        expected: "non-empty string",
        received: "empty string",
      },
    ]);

    expect(toSellerSdkErrorDetails(configurationError)).toMatchObject({
      isSellerSdkError: true,
      code: "configuration_error",
      issues: [{ path: ["credentials", "token"] }],
    });
    expect(toSellerSdkErrorDetails(new Error("Unexpected failure."))).toEqual({
      isSellerSdkError: false,
      name: "Error",
      code: "unknown_error",
      message: "Unexpected failure.",
    });
  });
});
