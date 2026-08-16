import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbsActStatusResponseSchema } from "./contract.js";
import type {
  GetFbsActStatusRequest,
  GetFbsActStatusResponse,
} from "./types.js";
export const GET_FBS_ACT_STATUS_OPERATION_ID =
  "PostingAPI_PostingFBSActCheckStatus";
export async function executeGetFbsActStatus(
  transport: Transport,
  input: GetFbsActStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsActStatusResponse> {
  const response = await transport.request({
    operationId: GET_FBS_ACT_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/act/check-status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsActStatusResponseSchema,
    response.body,
    GET_FBS_ACT_STATUS_OPERATION_ID,
  );
}
