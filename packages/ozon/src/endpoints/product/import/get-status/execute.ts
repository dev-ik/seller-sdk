import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getProductImportStatusResponseSchema } from "./contract.js";
import type {
  GetProductImportStatusRequest,
  GetProductImportStatusResponse,
} from "./types.js";

export const GET_PRODUCT_IMPORT_STATUS_OPERATION_ID =
  "ProductAPI_GetImportProductsInfo";

export async function executeGetProductImportStatus(
  transport: Transport,
  input: GetProductImportStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetProductImportStatusResponse> {
  const response = await transport.request({
    operationId: GET_PRODUCT_IMPORT_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/import/info",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getProductImportStatusResponseSchema,
    response.body,
    GET_PRODUCT_IMPORT_STATUS_OPERATION_ID,
  );
}
