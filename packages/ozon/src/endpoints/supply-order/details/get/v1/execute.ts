import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyOrderDetailsResponseSchema } from "./contract.js";
import type {
  GetSupplyOrderDetailsRequest,
  GetSupplyOrderDetailsResponse,
} from "./types.js";
export const GET_SUPPLY_ORDER_DETAILS_OPERATION_ID =
  "SupplyOrderAPI_SupplyOrderDetails";
export async function executeGetSupplyOrderDetails(
  transport: Transport,
  input: GetSupplyOrderDetailsRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrderDetailsResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDER_DETAILS_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/details",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyOrderDetailsResponseSchema,
    response.body,
    GET_SUPPLY_ORDER_DETAILS_OPERATION_ID,
  );
}
