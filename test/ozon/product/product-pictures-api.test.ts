import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeImportProductPictures,
  IMPORT_PRODUCT_PICTURES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/pictures/import/execute.js";
import {
  executeGetProductPictures,
  GET_PRODUCT_PICTURES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/product/pictures/info/execute.js";
import type { ImportProductPicturesRequest } from "../../../packages/ozon/src/endpoints/product/pictures/import/types.js";
import type { GetProductPicturesRequest } from "../../../packages/ozon/src/endpoints/product/pictures/info/types.js";

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

const input: ImportProductPicturesRequest = {
  color_image: "https://example.invalid/product-color.jpg",
  images: ["https://example.invalid/product-main.png"],
  product_id: 500000001,
};

const getInput: GetProductPicturesRequest = {
  product_id: ["500000001"],
};

describe("ProductAPI pictures", () => {
  it("imports the complete picture set without automatic retries", async () => {
    const mock = transport(
      await fixture("import-product-pictures.success.json"),
    );

    const response = await executeImportProductPictures(mock, input);

    expect(mock.requests[0]).toMatchObject({
      operationId: IMPORT_PRODUCT_PICTURES_OPERATION_ID,
      method: "POST",
      path: "/v1/product/pictures/import",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.result?.pictures?.[0]?.is_primary).toBe(true);
  });

  it("rejects malformed picture product identifiers", async () => {
    await expect(
      executeImportProductPictures(
        transport(await fixture("import-product-pictures.malformed.json")),
        input,
      ),
    ).rejects.toMatchObject({
      operationId: IMPORT_PRODUCT_PICTURES_OPERATION_ID,
    });
  });

  it("gets product pictures with safe retries and per-image errors", async () => {
    const mock = transport(await fixture("get-product-pictures.success.json"));

    const response = await executeGetProductPictures(mock, getInput);

    expect(mock.requests[0]).toMatchObject({
      operationId: GET_PRODUCT_PICTURES_OPERATION_ID,
      method: "POST",
      path: "/v2/product/pictures/info",
      body: getInput,
      retrySafety: "safe",
    });
    expect(response.items?.[0]).toMatchObject({
      product_id: 500000001,
      primary_photo: ["https://example.invalid/product-main.jpg"],
      errors: [{ message: "Image validation failed" }],
    });
  });

  it("rejects malformed product identifiers in picture information", async () => {
    await expect(
      executeGetProductPictures(
        transport(await fixture("get-product-pictures.malformed.json")),
        getInput,
      ),
    ).rejects.toMatchObject({
      operationId: GET_PRODUCT_PICTURES_OPERATION_ID,
    });
  });
});
