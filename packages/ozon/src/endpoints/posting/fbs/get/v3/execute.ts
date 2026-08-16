import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getFbsPostingV3ResponseSchema } from "./contract.js";
import type {
  GetFbsPostingV3Request,
  GetFbsPostingV3Response,
} from "./types.js";
export const GET_FBS_POSTING_V3_OPERATION_ID = "PostingAPI_GetFbsPostingV3";
export async function executeGetFbsPostingV3(
  transport: Transport,
  input: GetFbsPostingV3Request,
  options: OzonRequestOptions = {},
): Promise<GetFbsPostingV3Response> {
  const response = await transport.request({
    operationId: GET_FBS_POSTING_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/posting/fbs/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsPostingV3ResponseSchema,
    response.body,
    GET_FBS_POSTING_V3_OPERATION_ID,
  );
}
