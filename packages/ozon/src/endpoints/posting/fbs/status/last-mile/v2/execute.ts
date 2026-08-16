import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { ozonFbsPostingMoveStatusResponseSchema } from "../../shared/contract.js";
import type {
  SetFbsPostingsLastMileRequest,
  SetFbsPostingsLastMileResponse,
} from "./types.js";

export const SET_FBS_POSTINGS_LAST_MILE_OPERATION_ID =
  "PostingAPI_FbsPostingLastMile";

export async function executeSetFbsPostingsLastMile(
  transport: Transport,
  input: SetFbsPostingsLastMileRequest,
  options: OzonRequestOptions = {},
): Promise<SetFbsPostingsLastMileResponse> {
  const response = await transport.request({
    operationId: SET_FBS_POSTINGS_LAST_MILE_OPERATION_ID,
    method: "POST",
    path: "/v2/fbs/posting/last-mile",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    ozonFbsPostingMoveStatusResponseSchema,
    response.body,
    SET_FBS_POSTINGS_LAST_MILE_OPERATION_ID,
  );
}
