import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ARCHIVE_PRODUCTS_OPERATION_ID,
  executeArchiveProducts,
} from "../../../packages/ozon/src/endpoints/product/lifecycle/archive/execute.js";
import {
  DELETE_PRODUCTS_OPERATION_ID,
  executeDeleteProducts,
} from "../../../packages/ozon/src/endpoints/product/lifecycle/delete/execute.js";
import {
  executeUnarchiveProducts,
  UNARCHIVE_PRODUCTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/lifecycle/unarchive/execute.js";

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

describe("ProductAPI lifecycle", () => {
  it("archives products without automatic retries", async () => {
    const mock = transport(await fixture("archive-products.success.json"));
    const input = { product_id: [500000001, 500000002] };

    const response = await executeArchiveProducts(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: ARCHIVE_PRODUCTS_OPERATION_ID,
      method: "POST",
      path: "/v1/product/archive",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result).toBe(true);
  });

  it("rejects non-boolean archive results", async () => {
    await expect(
      executeArchiveProducts(
        transport(await fixture("archive-products.malformed.json")),
        { product_id: [500000001] },
      ),
    ).rejects.toMatchObject({ operationId: ARCHIVE_PRODUCTS_OPERATION_ID });
  });

  it("restores products from the archive without automatic retries", async () => {
    const mock = transport(await fixture("unarchive-products.success.json"));
    const input = { product_id: [500000001, 500000002] };

    const response = await executeUnarchiveProducts(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: UNARCHIVE_PRODUCTS_OPERATION_ID,
      method: "POST",
      path: "/v1/product/unarchive",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result).toBe(true);
  });

  it("rejects non-boolean unarchive results", async () => {
    await expect(
      executeUnarchiveProducts(
        transport(await fixture("unarchive-products.malformed.json")),
        { product_id: [500000001] },
      ),
    ).rejects.toMatchObject({ operationId: UNARCHIVE_PRODUCTS_OPERATION_ID });
  });

  it("deletes archived products without SKU and without automatic retries", async () => {
    const mock = transport(await fixture("delete-products.success.json"));
    const input = {
      products: [
        { offer_id: "TEST-OFFER-DELETABLE" },
        { offer_id: "TEST-OFFER-WITH-SKU" },
      ],
    };

    const response = await executeDeleteProducts(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: DELETE_PRODUCTS_OPERATION_ID,
      method: "POST",
      path: "/v2/products/delete",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.status?.[0]?.is_deleted).toBe(true);
    expect(response.status?.[1]?.is_deleted).toBe(false);
  });

  it("rejects malformed per-product deletion statuses", async () => {
    await expect(
      executeDeleteProducts(
        transport(await fixture("delete-products.malformed.json")),
        { products: [{ offer_id: "TEST-OFFER-DELETABLE" }] },
      ),
    ).rejects.toMatchObject({ operationId: DELETE_PRODUCTS_OPERATION_ID });
  });
});
