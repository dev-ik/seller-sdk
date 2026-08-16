import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listSupplyOrderTimeslotsV1ResponseSchema } from "./contract.js";
import type {
  ListSupplyOrderTimeslotsV1Request,
  ListSupplyOrderTimeslotsV1Response,
} from "./types.js";

export const LIST_SUPPLY_ORDER_TIMESLOTS_V1_OPERATION_ID =
  "SupplyOrderAPI_GetSupplyOrderTimeslots";
export async function executeListSupplyOrderTimeslotsV1(
  transport: Transport,
  input: ListSupplyOrderTimeslotsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListSupplyOrderTimeslotsV1Response> {
  const response = await transport.request({
    operationId: LIST_SUPPLY_ORDER_TIMESLOTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/timeslot/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listSupplyOrderTimeslotsV1ResponseSchema,
    response.body,
    LIST_SUPPLY_ORDER_TIMESLOTS_V1_OPERATION_ID,
  );
}
