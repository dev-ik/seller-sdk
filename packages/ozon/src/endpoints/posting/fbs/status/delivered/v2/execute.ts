import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { ozonFbsPostingMoveStatusResponseSchema } from "../../shared/contract.js";
import type {
  SetFbsPostingsDeliveredRequest,
  SetFbsPostingsDeliveredResponse,
} from "./types.js";

export const SET_FBS_POSTINGS_DELIVERED_OPERATION_ID =
  "PostingAPI_FbsPostingDelivered";

export async function executeSetFbsPostingsDelivered(
  transport: Transport,
  input: SetFbsPostingsDeliveredRequest,
  options: OzonRequestOptions = {},
): Promise<SetFbsPostingsDeliveredResponse> {
  const response = await transport.request({
    operationId: SET_FBS_POSTINGS_DELIVERED_OPERATION_ID,
    method: "POST",
    path: "/v2/fbs/posting/delivered",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    ozonFbsPostingMoveStatusResponseSchema,
    response.body,
    SET_FBS_POSTINGS_DELIVERED_OPERATION_ID,
  );
}
