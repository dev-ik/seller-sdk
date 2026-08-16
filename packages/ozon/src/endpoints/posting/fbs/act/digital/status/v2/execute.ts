import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { getFbsDigitalActStatusResponseSchema } from "./contract.js";
import type {
  GetFbsDigitalActStatusRequest,
  GetFbsDigitalActStatusResponse,
} from "./types.js";
export const GET_FBS_DIGITAL_ACT_STATUS_OPERATION_ID =
  "PostingAPI_PostingFBSDigitalActCheckStatus";
export async function executeGetFbsDigitalActStatus(
  transport: Transport,
  input: GetFbsDigitalActStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsDigitalActStatusResponse> {
  const response = await transport.request({
    operationId: GET_FBS_DIGITAL_ACT_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/digital/act/check-status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsDigitalActStatusResponseSchema,
    response.body,
    GET_FBS_DIGITAL_ACT_STATUS_OPERATION_ID,
  );
}
