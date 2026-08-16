import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { cancelFboPostingResponseSchema } from "./contract.js";
import type {
  CancelFboPostingRequest,
  CancelFboPostingResponse,
} from "./types.js";

export const CANCEL_FBO_POSTING_OPERATION_ID = "PostingAPI_PostingCancel";

/** @internal */
export async function executeCancelFboPosting(
  transport: Transport,
  input: CancelFboPostingRequest,
  options: OzonRequestOptions = {},
): Promise<CancelFboPostingResponse> {
  const response = await transport.request({
    operationId: CANCEL_FBO_POSTING_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    cancelFboPostingResponseSchema,
    response.body,
    CANCEL_FBO_POSTING_OPERATION_ID,
  );
}
