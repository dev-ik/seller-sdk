import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeUpdateProductMinPriceTimer,
  UPDATE_PRODUCT_MIN_PRICE_TIMER_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/prices/update-min-price-timer/execute.js";
import type { UpdateProductMinPriceTimerRequest } from "../../../packages/ozon/src/endpoints/product/prices/update-min-price-timer/types.js";

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

const input: UpdateProductMinPriceTimerRequest = {
  product_ids: ["500000001"],
};

describe("ProductAPI minimum price timer", () => {
  it("updates the timer without automatic retries", async () => {
    const mock = transport(
      await fixture("update-product-min-price-timer.success.json"),
    );

    await expect(
      executeUpdateProductMinPriceTimer(mock, input),
    ).resolves.toBeUndefined();

    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_PRODUCT_MIN_PRICE_TIMER_OPERATION_ID,
      method: "POST",
      path: "/v1/product/action/timer/update",
      body: input,
      retrySafety: "unsafe",
    });
  });

  it("rejects undocumented structured success responses", async () => {
    await expect(
      executeUpdateProductMinPriceTimer(
        transport(
          await fixture("update-product-min-price-timer.malformed.json"),
        ),
        input,
      ),
    ).rejects.toMatchObject({
      operationId: UPDATE_PRODUCT_MIN_PRICE_TIMER_OPERATION_ID,
    });
  });
});
