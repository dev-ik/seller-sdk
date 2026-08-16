import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getFbpPostingV1ResponseSchema } from "./contract.js";
import type {
  GetFbpPostingV1Request,
  GetFbpPostingV1Response,
} from "./types.js";

export const GET_FBP_POSTING_V1_OPERATION_ID = "GetFbpPosting";

export async function executeGetFbpPostingV1(
  transport: Transport,
  input: GetFbpPostingV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbpPostingV1Response> {
  const response = await transport.request({
    operationId: GET_FBP_POSTING_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbp/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbpPostingV1ResponseSchema,
    response.body,
    GET_FBP_POSTING_V1_OPERATION_ID,
  );
}
