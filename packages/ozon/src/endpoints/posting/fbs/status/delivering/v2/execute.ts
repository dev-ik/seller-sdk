import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { ozonFbsPostingMoveStatusResponseSchema } from "../../shared/contract.js";
import type {
  SetFbsPostingsDeliveringRequest,
  SetFbsPostingsDeliveringResponse,
} from "./types.js";

export const SET_FBS_POSTINGS_DELIVERING_OPERATION_ID =
  "PostingAPI_FbsPostingDelivering";

export async function executeSetFbsPostingsDelivering(
  transport: Transport,
  input: SetFbsPostingsDeliveringRequest,
  options: OzonRequestOptions = {},
): Promise<SetFbsPostingsDeliveringResponse> {
  const response = await transport.request({
    operationId: SET_FBS_POSTINGS_DELIVERING_OPERATION_ID,
    method: "POST",
    path: "/v2/fbs/posting/delivering",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    ozonFbsPostingMoveStatusResponseSchema,
    response.body,
    SET_FBS_POSTINGS_DELIVERING_OPERATION_ID,
  );
}
