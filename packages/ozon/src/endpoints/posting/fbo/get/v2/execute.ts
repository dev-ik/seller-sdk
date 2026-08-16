import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getFboPostingV2ResponseSchema } from "./contract.js";
import type {
  GetFboPostingV2Request,
  GetFboPostingV2Response,
} from "./types.js";
export const GET_FBO_POSTING_V2_OPERATION_ID = "PostingAPI_GetFboPosting";
export async function executeGetFboPostingV2(
  transport: Transport,
  input: GetFboPostingV2Request,
  options: OzonRequestOptions = {},
): Promise<GetFboPostingV2Response> {
  const response = await transport.request({
    operationId: GET_FBO_POSTING_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbo/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFboPostingV2ResponseSchema,
    response.body,
    GET_FBO_POSTING_V2_OPERATION_ID,
  );
}
