import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetProductAttributes,
  GET_PRODUCT_ATTRIBUTES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/info/attributes/execute.js";

async function fixture(name: string): Promise<unknown> {
  return JSON.parse(
    await readFile(
      new URL(`../../fixtures/ozon/${name}`, import.meta.url),
      "utf8",
    ),
  ) as unknown;
}

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("ProductAPI attributes info", () => {
  it("gets product attributes with cursor pagination and safe retries", async () => {
    const mock = transport(
      await fixture("get-product-attributes.success.json"),
    );
    const input = {
      filter: { offer_id: ["TEST-OFFER-001"], visibility: "ALL" as const },
      last_id: "TEST-CURSOR-000",
      limit: 100,
      sort_by: "offer_id",
      sort_dir: "ASC",
    };

    const response = await executeGetProductAttributes(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_ATTRIBUTES_OPERATION_ID,
      method: "POST",
      path: "/v4/product/info/attributes",
      body: input,
      retrySafety: "safe",
    });
    expect(response.last_id).toBe("TEST-CURSOR-001");
    expect(response.result?.[0]?.attributes?.[0]?.values?.[0]?.value).toBe(
      "TEST-BRAND",
    );
    expect(response.result?.[0]?.images?.[0]).toBe(
      "https://example.invalid/product.png",
    );
    expect(response.result?.[0]?.images?.[1]).toMatchObject({ index: 1 });
  });

  it("accepts numeric SKU and total values returned by the live API", async () => {
    const response = await executeGetProductAttributes(
      transport(await fixture("get-product-attributes.numeric-ids.json")),
      { filter: { sku: ["600000001"] }, limit: 1 },
    );

    expect(response.result?.[0]?.sku).toBe(600000001);
    expect(response.total).toBe(1);
  });

  it("rejects malformed nested dictionary identifiers", async () => {
    await expect(
      executeGetProductAttributes(
        transport(await fixture("get-product-attributes.malformed.json")),
        { limit: 100 },
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_ATTRIBUTES_OPERATION_ID,
    });
  });
});
