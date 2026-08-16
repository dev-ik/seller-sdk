import type { Transport } from "#internal-core";
import { getFbpDirectTimeslotsV1ResponseSchema } from "../../../../../draft/direct/timeslot/get/v1/contract.js";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import type {
  ListFbpDirectOrderTimeslotsV1Request,
  ListFbpDirectOrderTimeslotsV1Response,
} from "./types.js";

export const LIST_FBP_DIRECT_ORDER_TIMESLOTS_V1_OPERATION_ID =
  "FbpAPI_FbpAvailableTimeslotList";

export async function executeListFbpDirectOrderTimeslotsV1(
  transport: Transport,
  input: ListFbpDirectOrderTimeslotsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListFbpDirectOrderTimeslotsV1Response> {
  const response = await transport.request({
    operationId: LIST_FBP_DIRECT_ORDER_TIMESLOTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/direct/timeslot/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbpDirectTimeslotsV1ResponseSchema,
    response.body,
    LIST_FBP_DIRECT_ORDER_TIMESLOTS_V1_OPERATION_ID,
  );
}
