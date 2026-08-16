import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbpDirectDraftResponseSchema } from "../../shared/v1/contract.js";
import type {
  CreateFbpDirectDraftV1Request,
  CreateFbpDirectDraftV1Response,
} from "./types.js";
export const CREATE_FBP_DIRECT_DRAFT_V1_OPERATION_ID = "FbpDraftDirectCreate";
export async function executeCreateFbpDirectDraftV1(
  transport: Transport,
  input: CreateFbpDirectDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbpDirectDraftV1Response> {
  const response = await transport.request({
    operationId: CREATE_FBP_DIRECT_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/direct/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDirectDraftResponseSchema,
    response.body,
    CREATE_FBP_DIRECT_DRAFT_V1_OPERATION_ID,
  );
}
