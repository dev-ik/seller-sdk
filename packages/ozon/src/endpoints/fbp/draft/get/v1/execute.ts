import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getFbpDraftV1ResponseSchema } from "./contract.js";
import type { GetFbpDraftV1Request, GetFbpDraftV1Response } from "./types.js";

export const GET_FBP_DRAFT_V1_OPERATION_ID = "FbpAPI_FbpDraftGet";

export async function executeGetFbpDraftV1(
  transport: Transport,
  input: GetFbpDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbpDraftV1Response> {
  const response = await transport.request({
    operationId: GET_FBP_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbpDraftV1ResponseSchema,
    response.body,
    GET_FBP_DRAFT_V1_OPERATION_ID,
  );
}
