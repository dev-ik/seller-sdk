import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { updateSupplyOrderTimeslotResponseSchema } from "./contract.js";
import type {
  UpdateSupplyOrderTimeslotRequest,
  UpdateSupplyOrderTimeslotResponse,
} from "./types.js";
export const UPDATE_SUPPLY_ORDER_TIMESLOT_OPERATION_ID =
  "SupplyOrderAPI_UpdateSupplyOrderTimeslot";
export async function executeUpdateSupplyOrderTimeslot(
  transport: Transport,
  input: UpdateSupplyOrderTimeslotRequest,
  options: OzonRequestOptions = {},
): Promise<UpdateSupplyOrderTimeslotResponse> {
  const response = await transport.request({
    operationId: UPDATE_SUPPLY_ORDER_TIMESLOT_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/timeslot/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updateSupplyOrderTimeslotResponseSchema,
    response.body,
    UPDATE_SUPPLY_ORDER_TIMESLOT_OPERATION_ID,
  );
}
