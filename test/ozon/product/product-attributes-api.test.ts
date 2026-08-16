import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeUpdateProductAttributes,
  UPDATE_PRODUCT_ATTRIBUTES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/attributes/update/execute.js";
import type { UpdateProductAttributesRequest } from "../../../packages/ozon/src/endpoints/product/attributes/update/types.js";

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

const input: UpdateProductAttributesRequest = {
  items: [
    {
      attributes: [
        {
          complex_id: 0,
          id: 85,
          values: [
            {
              dictionary_value_id: 500000001,
              value: "TEST VALUE",
            },
          ],
        },
      ],
      offer_id: "TEST-OFFER-001",
    },
  ],
};

describe("ProductAPI attributes", () => {
  it("updates attributes without automatic retries", async () => {
    const mock = transport(
      await fixture("update-product-attributes.success.json"),
    );

    const response = await executeUpdateProductAttributes(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: UPDATE_PRODUCT_ATTRIBUTES_OPERATION_ID,
      method: "POST",
      path: "/v1/product/attributes/update",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.task_id).toBe(400000003);
  });

  it("rejects a malformed update task identifier", async () => {
    await expect(
      executeUpdateProductAttributes(
        transport(await fixture("update-product-attributes.malformed.json")),
        input,
      ),
    ).rejects.toMatchObject({
      operationId: UPDATE_PRODUCT_ATTRIBUTES_OPERATION_ID,
    });
  });
});
