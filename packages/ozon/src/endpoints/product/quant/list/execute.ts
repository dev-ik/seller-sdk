import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listQuantProductsResponseSchema } from "./contract.js";
import type {
  ListQuantProductsRequest,
  ListQuantProductsResponse,
} from "./types.js";

export const LIST_QUANT_PRODUCTS_OPERATION_ID = "QuantProductList";

/** @internal */
export async function executeListQuantProducts(
  transport: Transport,
  input: ListQuantProductsRequest,
  options: OzonRequestOptions = {},
): Promise<ListQuantProductsResponse> {
  const response = await transport.request({
    operationId: LIST_QUANT_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/quant/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listQuantProductsResponseSchema,
    response.body,
    LIST_QUANT_PRODUCTS_OPERATION_ID,
  );
}
