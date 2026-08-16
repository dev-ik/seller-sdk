import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsPostingTimeslotChangeRestrictionsResponseSchema } from "./contract.js";
import type {
  GetFbsPostingTimeslotChangeRestrictionsRequest,
  GetFbsPostingTimeslotChangeRestrictionsResponse,
} from "./types.js";

export const GET_FBS_POSTING_TIMESLOT_CHANGE_RESTRICTIONS_OPERATION_ID =
  "PostingAPI_PostingTimeslotChangeRestrictions";

export async function executeGetFbsPostingTimeslotChangeRestrictions(
  transport: Transport,
  input: GetFbsPostingTimeslotChangeRestrictionsRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsPostingTimeslotChangeRestrictionsResponse> {
  const response = await transport.request({
    operationId: GET_FBS_POSTING_TIMESLOT_CHANGE_RESTRICTIONS_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbs/timeslot/change-restrictions",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsPostingTimeslotChangeRestrictionsResponseSchema,
    response.body,
    GET_FBS_POSTING_TIMESLOT_CHANGE_RESTRICTIONS_OPERATION_ID,
  );
}
