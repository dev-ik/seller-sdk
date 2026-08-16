import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetProductInfoList,
  GET_PRODUCT_INFO_LIST_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/info/list/execute.js";

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

describe("ProductAPI info", () => {
  it("gets detailed product info with safe retries", async () => {
    const mock = transport(await fixture("get-product-info-list.success.json"));

    const response = await executeGetProductInfoList(mock, {
      offer_id: ["TEST-OFFER-001"],
    });

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_INFO_LIST_OPERATION_ID,
      method: "POST",
      path: "/v3/product/info/list",
      body: { offer_id: ["TEST-OFFER-001"] },
      retrySafety: "safe",
    });
    expect(response.items?.[0]?.price_indexes?.color_index).toBe(
      "COLOR_INDEX_GREEN",
    );
    expect(response.items?.[0]?.stocks?.stocks?.[0]?.present).toBe(50);
    expect(response.items?.[0]?.images360).toEqual([
      "https://example.invalid/product-360.jpg",
    ]);
    expect(response.items?.[0]?.is_seasonal).toBe(true);
  });

  it("rejects malformed product error levels", async () => {
    await expect(
      executeGetProductInfoList(
        transport(await fixture("get-product-info-list.malformed.json")),
        { sku: ["600000001"] },
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_INFO_LIST_OPERATION_ID,
    });
  });
});
