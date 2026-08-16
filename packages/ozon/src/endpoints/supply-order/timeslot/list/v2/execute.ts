import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listSupplyOrderTimeslotsV2ResponseSchema } from "./contract.js";
import type {
  ListSupplyOrderTimeslotsV2Request,
  ListSupplyOrderTimeslotsV2Response,
} from "./types.js";

export const LIST_SUPPLY_ORDER_TIMESLOTS_V2_OPERATION_ID =
  "SupplyOrderTimeslotList";
export async function executeListSupplyOrderTimeslotsV2(
  transport: Transport,
  input: ListSupplyOrderTimeslotsV2Request,
  options: OzonRequestOptions = {},
): Promise<ListSupplyOrderTimeslotsV2Response> {
  const response = await transport.request({
    operationId: LIST_SUPPLY_ORDER_TIMESLOTS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/supply-order/timeslot/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listSupplyOrderTimeslotsV2ResponseSchema,
    response.body,
    LIST_SUPPLY_ORDER_TIMESLOTS_V2_OPERATION_ID,
  );
}
