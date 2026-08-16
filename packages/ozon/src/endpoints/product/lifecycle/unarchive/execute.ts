import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { unarchiveProductsResponseSchema } from "./contract.js";
import type {
  UnarchiveProductsRequest,
  UnarchiveProductsResponse,
} from "./types.js";

export const UNARCHIVE_PRODUCTS_OPERATION_ID = "ProductAPI_ProductUnarchive";

export async function executeUnarchiveProducts(
  transport: Transport,
  input: UnarchiveProductsRequest,
  options: OzonRequestOptions = {},
): Promise<UnarchiveProductsResponse> {
  const response = await transport.request({
    operationId: UNARCHIVE_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/unarchive",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    unarchiveProductsResponseSchema,
    response.body,
    UNARCHIVE_PRODUCTS_OPERATION_ID,
  );
}
