import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { getFbpDropOffPointTimetableV1ResponseSchema } from "./contract.js";
import type {
  GetFbpDropOffPointTimetableV1Request,
  GetFbpDropOffPointTimetableV1Response,
} from "./types.js";
export const GET_FBP_DROP_OFF_POINT_TIMETABLE_V1_OPERATION_ID =
  "FbpDraftDropOffPointTimetable";
export async function executeGetFbpDropOffPointTimetableV1(
  transport: Transport,
  input: GetFbpDropOffPointTimetableV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbpDropOffPointTimetableV1Response> {
  const response = await transport.request({
    operationId: GET_FBP_DROP_OFF_POINT_TIMETABLE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/drop-off/point/timetable",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbpDropOffPointTimetableV1ResponseSchema,
    response.body,
    GET_FBP_DROP_OFF_POINT_TIMETABLE_V1_OPERATION_ID,
  );
}
