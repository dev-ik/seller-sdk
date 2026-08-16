import { describe, expect, it } from "vitest";
import {
  redactHeaders,
  redactUrl,
} from "../../packages/core/src/core/redaction.js";

describe("redaction", () => {
  it("redacts credentials and authorization headers", () => {
    expect(
      redactHeaders({
        "Client-Id": "test-client-id",
        "Api-Key": "test-api-key",
        Authorization: "Bearer test-token",
        Accept: "application/json",
      }),
    ).toEqual({
      "Client-Id": "[REDACTED]",
      "Api-Key": "[REDACTED]",
      Authorization: "[REDACTED]",
      Accept: "application/json",
    });
  });

  it("removes query parameters from logged URLs", () => {
    expect(
      redactUrl(new URL("https://api-seller.ozon.ru/v1/example?secret=value")),
    ).toBe("https://api-seller.ozon.ru/v1/example");
  });
});
