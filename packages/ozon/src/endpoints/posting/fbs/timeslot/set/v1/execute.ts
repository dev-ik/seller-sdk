import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { setFbsPostingTimeslotResponseSchema } from "./contract.js";
import type {
  SetFbsPostingTimeslotRequest,
  SetFbsPostingTimeslotResponse,
} from "./types.js";

export const SET_FBS_POSTING_TIMESLOT_OPERATION_ID =
  "PostingAPI_SetPostingTimeslot";

export async function executeSetFbsPostingTimeslot(
  transport: Transport,
  input: SetFbsPostingTimeslotRequest,
  options: OzonRequestOptions = {},
): Promise<SetFbsPostingTimeslotResponse> {
  const response = await transport.request({
    operationId: SET_FBS_POSTING_TIMESLOT_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbs/timeslot/set",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    setFbsPostingTimeslotResponseSchema,
    response.body,
    SET_FBS_POSTING_TIMESLOT_OPERATION_ID,
  );
}
