import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyOrderCancelStatusResponseSchema } from "./contract.js";
import type {
  GetSupplyOrderCancelStatusRequest,
  GetSupplyOrderCancelStatusResponse,
} from "./types.js";
export const GET_SUPPLY_ORDER_CANCEL_STATUS_OPERATION_ID =
  "SupplyOrderAPI_SupplyOrderCancelStatus";
export async function executeGetSupplyOrderCancelStatus(
  transport: Transport,
  input: GetSupplyOrderCancelStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrderCancelStatusResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDER_CANCEL_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/cancel/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyOrderCancelStatusResponseSchema,
    response.body,
    GET_SUPPLY_ORDER_CANCEL_STATUS_OPERATION_ID,
  );
}
