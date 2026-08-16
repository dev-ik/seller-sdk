import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { listFboPostingCancelReasonsResponseSchema } from "./contract.js";
import type { ListFboPostingCancelReasonsResponse } from "./types.js";
export const LIST_FBO_POSTING_CANCEL_REASONS_OPERATION_ID =
  "PostingAPI_GetPostingFboCancelReasonList";
export async function executeListFboPostingCancelReasons(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListFboPostingCancelReasonsResponse> {
  const response = await transport.request({
    operationId: LIST_FBO_POSTING_CANCEL_REASONS_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/fbo/cancel-reason/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFboPostingCancelReasonsResponseSchema,
    response.body,
    LIST_FBO_POSTING_CANCEL_REASONS_OPERATION_ID,
  );
}
