import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listCancelReasonsByPostingResponseSchema } from "./contract.js";
import type {
  ListCancelReasonsByPostingRequest,
  ListCancelReasonsByPostingResponse,
} from "./types.js";

export const LIST_CANCEL_REASONS_BY_POSTING_OPERATION_ID =
  "CancelReasonAPI_CancelReasonListByPosting";

/** @internal */
export async function executeListCancelReasonsByPosting(
  transport: Transport,
  input: ListCancelReasonsByPostingRequest,
  options: OzonRequestOptions = {},
): Promise<ListCancelReasonsByPostingResponse> {
  const response = await transport.request({
    operationId: LIST_CANCEL_REASONS_BY_POSTING_OPERATION_ID,
    method: "POST",
    path: "/v1/cancel-reason/list-by-posting",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listCancelReasonsByPostingResponseSchema,
    response.body,
    LIST_CANCEL_REASONS_BY_POSTING_OPERATION_ID,
  );
}
