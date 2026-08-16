import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListProductsWithWrongVolume,
  LIST_PRODUCTS_WITH_WRONG_VOLUME_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/info/wrong-volume/execute.js";
import type { ListProductsWithWrongVolumeRequest } from "../../../packages/ozon/src/endpoints/product/info/wrong-volume/types.js";

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

const input: ListProductsWithWrongVolumeRequest = {
  cursor: "TEST-WRONG-VOLUME-CURSOR-001",
  limit: 1000,
};

describe("ProductAPI wrong volume", () => {
  it("lists products with cursor pagination and safe retries", async () => {
    const mock = transport(
      await fixture("list-products-with-wrong-volume.success.json"),
    );

    const response = await executeListProductsWithWrongVolume(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_PRODUCTS_WITH_WRONG_VOLUME_OPERATION_ID,
      method: "POST",
      path: "/v1/product/info/wrong-volume",
      body: input,
      retrySafety: "safe",
    });
    expect(response.cursor).toBe("TEST-WRONG-VOLUME-CURSOR-002");
    expect(response.products?.[0]).toMatchObject({
      offer_id: "TEST-OFFER-WRONG-VOLUME-001",
      product_id: 500000001,
      width: 200,
    });
  });

  it("rejects malformed product dimensions", async () => {
    await expect(
      executeListProductsWithWrongVolume(
        transport(
          await fixture("list-products-with-wrong-volume.malformed.json"),
        ),
        input,
      ),
    ).rejects.toMatchObject({
      operationId: LIST_PRODUCTS_WITH_WRONG_VOLUME_OPERATION_ID,
    });
  });
});
