import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

interface EndpointManifest {
  readonly schemaVersion: number;
  readonly marketplace: string;
  readonly source: string;
  readonly specification: string;
  readonly localSpecification: string;
  readonly specificationSha256: string;
  readonly verification: {
    readonly status: string;
    readonly checkedAt: string;
    readonly openapiVersion: string;
    readonly documentVersion: string;
  };
  readonly operations: readonly {
    readonly operationId: string;
    readonly sdkMethod: string;
    readonly status: string;
    readonly documentation: string;
    readonly method: string;
    readonly path: string;
    readonly pagination: string;
    readonly retrySafety: string;
    readonly request: {
      readonly body: string;
      readonly headers: readonly string[];
    };
  }[];
}

describe("Ozon endpoint manifest", () => {
  it("records the verified official contract for every operation", async () => {
    const fileUrl = new URL("../../docs/ozon/endpoints.json", import.meta.url);
    const manifest = JSON.parse(
      await readFile(fileUrl, "utf8"),
    ) as EndpointManifest;

    expect(manifest.schemaVersion).toBe(1);
    expect(manifest.marketplace).toBe("ozon");
    expect(manifest.source).toBe("https://docs.ozon.ru/api/seller/");
    expect(manifest.specification).toBe(
      "https://docs.ozon.ru/api/seller/swagger.json",
    );
    expect(manifest.localSpecification).toBe("./swagger.json");
    expect(manifest.specificationSha256).toBe(
      "56e0ff0c64710918107ab83b574d209762fc559dbc9c80198ae31708b3881830",
    );
    expect(manifest.verification.status).toBe("verified");
    expect(manifest.verification.checkedAt).toBe("2026-08-14");
    expect(manifest.verification.openapiVersion).toBe("3.0.0");
    expect(manifest.verification.documentVersion).toBe("2.1");
    expect(manifest.operations).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          operationId: "AccessAPI_RolesByToken",
          sdkMethod: "getRoles",
          status: "implemented",
          documentation:
            "https://docs.ozon.ru/api/seller/#operation/AccessAPI_RolesByToken",
          method: "POST",
          path: "/v1/roles",
          pagination: "none",
          retrySafety: "safe",
          request: {
            body: "none",
            headers: ["Client-Id", "Api-Key"],
          },
        }),
        expect.objectContaining({
          operationId: "SellerAPI_SellerOzonLogisticsInfo",
          sdkMethod: "getOzonLogisticsInfo",
          status: "implemented",
          documentation:
            "https://docs.ozon.ru/api/seller/#operation/SellerAPI_SellerOzonLogisticsInfo",
          method: "POST",
          path: "/v1/seller/ozon-logistics/info",
          pagination: "none",
          retrySafety: "safe",
          request: {
            body: "none",
            headers: ["Client-Id", "Api-Key"],
          },
        }),
        expect.objectContaining({
          operationId: "SellerAPI_SellerInfo",
          sdkMethod: "getSellerInfo",
          status: "implemented",
          documentation:
            "https://docs.ozon.ru/api/seller/#operation/SellerAPI_SellerInfo",
          method: "POST",
          path: "/v1/seller/info",
          pagination: "none",
          retrySafety: "safe",
          request: {
            body: "none",
            headers: ["Client-Id", "Api-Key"],
          },
        }),
        expect.objectContaining({
          operationId: "DescriptionCategoryAPI_GetTree",
          sdkMethod: "getDescriptionCategoryTree",
          status: "implemented",
          documentation:
            "https://docs.ozon.ru/api/seller/#operation/DescriptionCategoryAPI_GetTree",
          method: "POST",
          path: "/v1/description-category/tree",
          pagination: "none",
          retrySafety: "safe",
          request: {
            body: "#/components/schemas/v1GetTreeRequest",
            headers: ["Client-Id", "Api-Key"],
          },
        }),
      ]),
    );
  });
});
