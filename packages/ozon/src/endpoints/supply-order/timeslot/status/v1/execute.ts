import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyOrderTimeslotStatusResponseSchema } from "./contract.js";
import type {
  GetSupplyOrderTimeslotStatusRequest,
  GetSupplyOrderTimeslotStatusResponse,
} from "./types.js";
export const GET_SUPPLY_ORDER_TIMESLOT_STATUS_OPERATION_ID =
  "SupplyOrderAPI_GetSupplyOrderTimeslotStatus";
export async function executeGetSupplyOrderTimeslotStatus(
  transport: Transport,
  input: GetSupplyOrderTimeslotStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrderTimeslotStatusResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDER_TIMESLOT_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/timeslot/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyOrderTimeslotStatusResponseSchema,
    response.body,
    GET_SUPPLY_ORDER_TIMESLOT_STATUS_OPERATION_ID,
  );
}
