import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { getFbpDirectTimeslotsV1ResponseSchema } from "./contract.js";
import type {
  GetFbpDirectTimeslotsV1Request,
  GetFbpDirectTimeslotsV1Response,
} from "./types.js";
export const GET_FBP_DIRECT_TIMESLOTS_V1_OPERATION_ID =
  "FbpDraftDirectGetTimeslot";
export async function executeGetFbpDirectTimeslotsV1(
  transport: Transport,
  input: GetFbpDirectTimeslotsV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbpDirectTimeslotsV1Response> {
  const response = await transport.request({
    operationId: GET_FBP_DIRECT_TIMESLOTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/direct/timeslot/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbpDirectTimeslotsV1ResponseSchema,
    response.body,
    GET_FBP_DIRECT_TIMESLOTS_V1_OPERATION_ID,
  );
}
