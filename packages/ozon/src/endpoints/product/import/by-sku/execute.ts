import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { importProductsBySkuResponseSchema } from "./contract.js";
import type {
  ImportProductsBySkuRequest,
  ImportProductsBySkuResponse,
} from "./types.js";

export const IMPORT_PRODUCTS_BY_SKU_OPERATION_ID =
  "ProductAPI_ImportProductsBySKU";

export async function executeImportProductsBySku(
  transport: Transport,
  input: ImportProductsBySkuRequest,
  options: OzonRequestOptions = {},
): Promise<ImportProductsBySkuResponse> {
  const response = await transport.request({
    operationId: IMPORT_PRODUCTS_BY_SKU_OPERATION_ID,
    method: "POST",
    path: "/v1/product/import-by-sku",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    importProductsBySkuResponseSchema,
    response.body,
    IMPORT_PRODUCTS_BY_SKU_OPERATION_ID,
  );
}
