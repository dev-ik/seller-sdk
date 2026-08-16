import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetProductDescription,
  GET_PRODUCT_DESCRIPTION_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/info/description/execute.js";

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

describe("ProductAPI description", () => {
  it("gets a product description by one identifier with safe retries", async () => {
    const mock = transport(
      await fixture("get-product-description.success.json"),
    );

    const response = await executeGetProductDescription(mock, {
      offer_id: "TEST-OFFER-001",
    });

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_DESCRIPTION_OPERATION_ID,
      method: "POST",
      path: "/v1/product/info/description",
      body: { offer_id: "TEST-OFFER-001" },
      retrySafety: "safe",
    });
    expect(response.result?.name).toBe("TEST PRODUCT");
    expect(response.result?.description).toBe("Sanitized product description.");
  });

  it("rejects malformed product identifiers in the response", async () => {
    await expect(
      executeGetProductDescription(
        transport(await fixture("get-product-description.malformed.json")),
        { product_id: 500000001 },
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_DESCRIPTION_OPERATION_ID,
    });
  });
});
