import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listCancelReasonsResponseSchema } from "./contract.js";
import type { ListCancelReasonsResponse } from "./types.js";

export const LIST_CANCEL_REASONS_OPERATION_ID = "CancelReasonList";

/** @internal */
export async function executeListCancelReasons(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListCancelReasonsResponse> {
  const response = await transport.request({
    operationId: LIST_CANCEL_REASONS_OPERATION_ID,
    method: "POST",
    path: "/v1/cancel-reason/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listCancelReasonsResponseSchema,
    response.body,
    LIST_CANCEL_REASONS_OPERATION_ID,
  );
}
