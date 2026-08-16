import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getSupplyOrderActProductsResponseSchema } from "./contract.js";
import type {
  GetSupplyOrderActProductsRequest,
  GetSupplyOrderActProductsResponse,
} from "./types.js";

export const GET_SUPPLY_ORDER_ACT_PRODUCTS_OPERATION_ID =
  "SupplyOrderActProductGet";

export async function executeGetSupplyOrderActProducts(
  transport: Transport,
  input: GetSupplyOrderActProductsRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrderActProductsResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDER_ACT_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/act/product/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getSupplyOrderActProductsResponseSchema,
    response.body,
    GET_SUPPLY_ORDER_ACT_PRODUCTS_OPERATION_ID,
  );
}
