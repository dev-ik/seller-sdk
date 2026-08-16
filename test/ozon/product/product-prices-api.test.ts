import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeUpdateProductPrices,
  UPDATE_PRODUCT_PRICES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/prices/update/execute.js";
import type { UpdateProductPricesRequest } from "../../../packages/ozon/src/endpoints/product/prices/update/types.js";

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

const input: UpdateProductPricesRequest = {
  prices: [
    {
      auto_action_enabled: "DISABLED",
      currency_code: "RUB",
      min_price: "800.00",
      offer_id: "TEST-OFFER-PRICE-001",
      old_price: "1600.00",
      price: "1448.00",
      vat: "0.2",
    },
  ],
};

describe("ProductAPI prices", () => {
  it("updates exact string prices without automatic retries", async () => {
    const mock = transport(await fixture("update-product-prices.success.json"));

    const response = await executeUpdateProductPrices(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_PRODUCT_PRICES_OPERATION_ID,
      method: "POST",
      path: "/v1/product/import/prices",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.[0]?.updated).toBe(true);
    expect(response.result?.[1]).toMatchObject({
      updated: false,
      errors: [{ code: "action_price_enabled_min_price_missing" }],
    });
  });

  it("rejects malformed update flags", async () => {
    await expect(
      executeUpdateProductPrices(
        transport(await fixture("update-product-prices.malformed.json")),
        input,
      ),
    ).rejects.toMatchObject({
      operationId: UPDATE_PRODUCT_PRICES_OPERATION_ID,
    });
  });
});
