import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsPostingCancelReasonsV1ResponseSchema } from "./contract.js";
import type {
  GetFbsPostingCancelReasonsV1Request,
  GetFbsPostingCancelReasonsV1Response,
} from "./types.js";
export const GET_FBS_POSTING_CANCEL_REASONS_V1_OPERATION_ID =
  "PostingAPI_GetPostingFbsCancelReasonV1";
export async function executeGetFbsPostingCancelReasonsV1(
  transport: Transport,
  input: GetFbsPostingCancelReasonsV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbsPostingCancelReasonsV1Response> {
  const response = await transport.request({
    operationId: GET_FBS_POSTING_CANCEL_REASONS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbs/cancel-reason",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsPostingCancelReasonsV1ResponseSchema,
    response.body,
    GET_FBS_POSTING_CANCEL_REASONS_V1_OPERATION_ID,
  );
}
