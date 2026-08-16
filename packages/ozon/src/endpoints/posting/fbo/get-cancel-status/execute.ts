import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getFboPostingCancellationStatusResponseSchema } from "./contract.js";
import type {
  GetFboPostingCancellationStatusRequest,
  GetFboPostingCancellationStatusResponse,
} from "./types.js";

export const GET_FBO_POSTING_CANCELLATION_STATUS_OPERATION_ID =
  "PostingAPI_PostingCancelStatus";

/** @internal */
export async function executeGetFboPostingCancellationStatus(
  transport: Transport,
  input: GetFboPostingCancellationStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetFboPostingCancellationStatusResponse> {
  const response = await transport.request({
    operationId: GET_FBO_POSTING_CANCELLATION_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/posting/cancel/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getFboPostingCancellationStatusResponseSchema,
    response.body,
    GET_FBO_POSTING_CANCELLATION_STATUS_OPERATION_ID,
  );
}
