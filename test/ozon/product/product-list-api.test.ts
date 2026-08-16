import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListProducts,
  LIST_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/list/execute.js";
import type { ListProductsRequest } from "../../../packages/ozon/src/endpoints/product/list/types.js";

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

describe("ProductAPI list", () => {
  it("lists products with cursor pagination and safe retries", async () => {
    const mock = transport(await fixture("list-products.success.json"));
    const input = {
      filter: { offer_id: ["TEST-OFFER-001"], visibility: "ALL" as const },
      last_id: "TEST-CURSOR-000",
      limit: 100,
    };

    const response = await executeListProducts(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_PRODUCTS_OPERATION_ID,
      method: "POST",
      path: "/v3/product/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.result?.last_id).toBe("TEST-CURSOR-001");
    expect(response.result?.items?.[0]?.quants?.[0]?.quant_size).toBe(2);
  });

  it("rejects malformed quant sizes", async () => {
    await expect(
      executeListProducts(
        transport(await fixture("list-products.malformed.json")),
        { filter: {}, limit: 100 },
      ),
    ).rejects.toMatchObject({ operationId: LIST_PRODUCTS_OPERATION_ID });
  });

  it.each([
    ["request object", undefined, []],
    ["filter", { limit: 100 }, ["filter"]],
    [
      "filter field",
      { filter: { since: "2026-08-01T00:00:00Z" }, limit: 100 },
      ["filter", "since"],
    ],
    ["limit", { filter: {} }, ["limit"]],
    ["limit range", { filter: {}, limit: 0 }, ["limit"]],
  ])(
    "rejects an invalid %s before sending a request",
    async (_, input, path) => {
      const mock = transport(await fixture("list-products.success.json"));

      await expect(
        executeListProducts(mock, input as unknown as ListProductsRequest),
      ).rejects.toMatchObject({
        code: "configuration_error",
        issues: [expect.objectContaining({ path })],
      });
      expect(mock.requests).toHaveLength(0);
    },
  );
});
