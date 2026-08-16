import type { Transport } from "#internal-core";
import { getFbpDropOffPointTimetableV1ResponseSchema } from "../../../../draft/drop-off/point/timetable/v1/contract.js";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  GetFbpDropOffOrderTimetableV1Request,
  GetFbpDropOffOrderTimetableV1Response,
} from "./types.js";

export const GET_FBP_DROP_OFF_ORDER_TIMETABLE_V1_OPERATION_ID =
  "FbpAPI_FbpOrderDropOffTimetable";

export async function executeGetFbpDropOffOrderTimetableV1(
  transport: Transport,
  input: GetFbpDropOffOrderTimetableV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbpDropOffOrderTimetableV1Response> {
  const response = await transport.request({
    operationId: GET_FBP_DROP_OFF_ORDER_TIMETABLE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/drop-off/timetable",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbpDropOffPointTimetableV1ResponseSchema,
    response.body,
    GET_FBP_DROP_OFF_ORDER_TIMETABLE_V1_OPERATION_ID,
  );
}
