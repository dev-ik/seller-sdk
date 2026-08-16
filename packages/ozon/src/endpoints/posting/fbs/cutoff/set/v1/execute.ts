import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { setFbsPostingCutoffResponseSchema } from "./contract.js";
import type {
  SetFbsPostingCutoffRequest,
  SetFbsPostingCutoffResponse,
} from "./types.js";

export const SET_FBS_POSTING_CUTOFF_OPERATION_ID =
  "PostingAPI_SetPostingCutoff";

export async function executeSetFbsPostingCutoff(
  transport: Transport,
  input: SetFbsPostingCutoffRequest,
  options: OzonRequestOptions = {},
): Promise<SetFbsPostingCutoffResponse> {
  const response = await transport.request({
    operationId: SET_FBS_POSTING_CUTOFF_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/cutoff/set",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    setFbsPostingCutoffResponseSchema,
    response.body,
    SET_FBS_POSTING_CUTOFF_OPERATION_ID,
  );
}
