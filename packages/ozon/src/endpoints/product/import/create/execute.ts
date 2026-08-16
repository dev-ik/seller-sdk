import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { importProductsResponseSchema } from "./contract.js";
import type { ImportProductsRequest, ImportProductsResponse } from "./types.js";

export const IMPORT_PRODUCTS_OPERATION_ID = "ProductAPI_ImportProductsV3";

export async function executeImportProducts(
  transport: Transport,
  input: ImportProductsRequest,
  options: OzonRequestOptions = {},
): Promise<ImportProductsResponse> {
  const response = await transport.request({
    operationId: IMPORT_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v3/product/import",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    importProductsResponseSchema,
    response.body,
    IMPORT_PRODUCTS_OPERATION_ID,
  );
}
