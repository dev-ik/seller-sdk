import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { fbsBooleanMutationResponseSchema } from "../../shared/boolean-mutation/contract.js";
import type {
  CancelFbsPostingV2Request,
  CancelFbsPostingV2Response,
} from "./types.js";
export const CANCEL_FBS_POSTING_V2_OPERATION_ID = "PostingAPI_CancelFbsPosting";
export async function executeCancelFbsPostingV2(
  transport: Transport,
  input: CancelFbsPostingV2Request,
  options: OzonRequestOptions = {},
): Promise<CancelFbsPostingV2Response> {
  const response = await transport.request({
    operationId: CANCEL_FBS_POSTING_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbsBooleanMutationResponseSchema,
    response.body,
    CANCEL_FBS_POSTING_V2_OPERATION_ID,
  );
}
