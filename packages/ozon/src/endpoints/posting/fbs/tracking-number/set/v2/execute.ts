import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { ozonFbsPostingMoveStatusResponseSchema } from "../../../status/shared/contract.js";
import type {
  SetFbsPostingTrackingNumbersRequest,
  SetFbsPostingTrackingNumbersResponse,
} from "./types.js";

export const SET_FBS_POSTING_TRACKING_NUMBERS_OPERATION_ID =
  "PostingAPI_FbsPostingTrackingNumberSet";

export async function executeSetFbsPostingTrackingNumbers(
  transport: Transport,
  input: SetFbsPostingTrackingNumbersRequest,
  options: OzonRequestOptions = {},
): Promise<SetFbsPostingTrackingNumbersResponse> {
  const response = await transport.request({
    operationId: SET_FBS_POSTING_TRACKING_NUMBERS_OPERATION_ID,
    method: "POST",
    path: "/v2/fbs/posting/tracking-number/set",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    ozonFbsPostingMoveStatusResponseSchema,
    response.body,
    SET_FBS_POSTING_TRACKING_NUMBERS_OPERATION_ID,
  );
}
