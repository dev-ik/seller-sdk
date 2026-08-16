import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listFbsPostingCancelReasonsV2ResponseSchema } from "./contract.js";
import type { ListFbsPostingCancelReasonsV2Response } from "./types.js";
export const LIST_FBS_POSTING_CANCEL_REASONS_V2_OPERATION_ID =
  "PostingAPI_GetPostingFbsCancelReasonList";
export async function executeListFbsPostingCancelReasonsV2(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListFbsPostingCancelReasonsV2Response> {
  const response = await transport.request({
    operationId: LIST_FBS_POSTING_CANCEL_REASONS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/cancel-reason/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsPostingCancelReasonsV2ResponseSchema,
    response.body,
    LIST_FBS_POSTING_CANCEL_REASONS_V2_OPERATION_ID,
  );
}
