import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsPostingRestrictionsV1ResponseSchema } from "./contract.js";
import type {
  GetFbsPostingRestrictionsV1Request,
  GetFbsPostingRestrictionsV1Response,
} from "./types.js";
export const GET_FBS_POSTING_RESTRICTIONS_V1_OPERATION_ID =
  "PostingAPI_GetRestrictions";
export async function executeGetFbsPostingRestrictionsV1(
  transport: Transport,
  input: GetFbsPostingRestrictionsV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbsPostingRestrictionsV1Response> {
  const response = await transport.request({
    operationId: GET_FBS_POSTING_RESTRICTIONS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbs/restrictions",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsPostingRestrictionsV1ResponseSchema,
    response.body,
    GET_FBS_POSTING_RESTRICTIONS_V1_OPERATION_ID,
  );
}
