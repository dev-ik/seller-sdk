import { describe, expect, it } from "vitest";
import {
  ConfigurationError,
  Marketplace,
  SellerClient,
} from "../../packages/seller-sdk/src/index.js";
import { OzonClient } from "../../packages/ozon/src/index.js";

const credentials = {
  clientId: "test-client-id",
  apiKey: "test-api-key",
};

describe("client configuration", () => {
  it("constructs the root and direct Ozon clients", () => {
    const seller = new SellerClient({
      marketplace: Marketplace.Ozon,
      credentials,
    });
    const ozon = new OzonClient(credentials);

    expect(seller.marketplace).toBe("ozon");
    expect(seller.ozon).toBeInstanceOf(OzonClient);
    expect(ozon).toBeInstanceOf(OzonClient);
    expect(JSON.stringify(seller)).not.toContain("test-api-key");
    expect(JSON.stringify(ozon)).not.toContain("test-api-key");
  });

  it("rejects empty credentials at runtime", () => {
    expect(
      () => new OzonClient({ clientId: " ", apiKey: "test-api-key" }),
    ).toThrowError(ConfigurationError);
  });

  it("rejects unsupported dynamic marketplace values", () => {
    const dynamicOptions: unknown = {
      marketplace: "unsupported",
      credentials,
    };

    expect(() => new SellerClient(dynamicOptions as never)).toThrowError(
      ConfigurationError,
    );
  });

  it("rejects unknown dynamic configuration fields", () => {
    const dynamicOptions: unknown = {
      marketplace: "ozon",
      credentials,
      unexpected: true,
    };

    expect(() => new SellerClient(dynamicOptions as never)).toThrowError(
      ConfigurationError,
    );
  });

  it("validates Ozon client and per-request configuration", async () => {
    expect(() => new OzonClient(credentials, { maxRetries: -1 })).toThrowError(
      ConfigurationError,
    );
    expect(() => new OzonClient(credentials, { timeoutMs: 0 })).toThrowError(
      ConfigurationError,
    );

    const ozon = new OzonClient(credentials);
    await expect(ozon.access.getRoles({ maxRetries: 10 })).rejects.toThrowError(
      ConfigurationError,
    );
  });

  it("does not include credential values in configuration errors", () => {
    const secret = "must-not-appear";

    try {
      new OzonClient({ clientId: "", apiKey: secret });
      throw new Error("Expected OzonClient construction to fail.");
    } catch (error) {
      expect(error).toBeInstanceOf(ConfigurationError);
      expect(String(error)).not.toContain(secret);
      expect(JSON.stringify(error)).not.toContain(secret);
    }
  });
});
