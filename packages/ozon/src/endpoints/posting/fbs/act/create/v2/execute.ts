import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createFbsActResponseSchema } from "./contract.js";
import type { CreateFbsActRequest, CreateFbsActResponse } from "./types.js";
export const CREATE_FBS_ACT_OPERATION_ID = "PostingAPI_PostingFBSActCreate";
export async function executeCreateFbsAct(
  transport: Transport,
  input: CreateFbsActRequest,
  options: OzonRequestOptions = {},
): Promise<CreateFbsActResponse> {
  const response = await transport.request({
    operationId: CREATE_FBS_ACT_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/act/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createFbsActResponseSchema,
    response.body,
    CREATE_FBS_ACT_OPERATION_ID,
  );
}
