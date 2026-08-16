import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { fbsBooleanMutationResponseSchema } from "../../../shared/boolean-mutation/contract.js";
import type {
  SetFbsPostingsAwaitingDeliveryV2Request,
  SetFbsPostingsAwaitingDeliveryV2Response,
} from "./types.js";
export const SET_FBS_POSTINGS_AWAITING_DELIVERY_V2_OPERATION_ID =
  "PostingAPI_MoveFbsPostingToAwaitingDelivery";
export async function executeSetFbsPostingsAwaitingDeliveryV2(
  transport: Transport,
  input: SetFbsPostingsAwaitingDeliveryV2Request,
  options: OzonRequestOptions = {},
): Promise<SetFbsPostingsAwaitingDeliveryV2Response> {
  const response = await transport.request({
    operationId: SET_FBS_POSTINGS_AWAITING_DELIVERY_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/awaiting-delivery",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbsBooleanMutationResponseSchema,
    response.body,
    SET_FBS_POSTINGS_AWAITING_DELIVERY_V2_OPERATION_ID,
  );
}
