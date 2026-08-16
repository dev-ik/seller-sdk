import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyOrderPassStatusResponseSchema } from "./contract.js";
import type {
  GetSupplyOrderPassStatusRequest,
  GetSupplyOrderPassStatusResponse,
} from "./types.js";
export const GET_SUPPLY_ORDER_PASS_STATUS_OPERATION_ID =
  "SupplyOrderAPI_SupplyOrderPassStatus";
export async function executeGetSupplyOrderPassStatus(
  transport: Transport,
  input: GetSupplyOrderPassStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrderPassStatusResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDER_PASS_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/pass/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyOrderPassStatusResponseSchema,
    response.body,
    GET_SUPPLY_ORDER_PASS_STATUS_OPERATION_ID,
  );
}
