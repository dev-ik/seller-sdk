import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listCancelReasonsByOrderResponseSchema } from "./contract.js";
import type {
  ListCancelReasonsByOrderRequest,
  ListCancelReasonsByOrderResponse,
} from "./types.js";

export const LIST_CANCEL_REASONS_BY_ORDER_OPERATION_ID =
  "CancelReasonListByOrder";

/** @internal */
export async function executeListCancelReasonsByOrder(
  transport: Transport,
  input: ListCancelReasonsByOrderRequest,
  options: OzonRequestOptions = {},
): Promise<ListCancelReasonsByOrderResponse> {
  const response = await transport.request({
    operationId: LIST_CANCEL_REASONS_BY_ORDER_OPERATION_ID,
    method: "POST",
    path: "/v1/cancel-reason/list-by-order",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listCancelReasonsByOrderResponseSchema,
    response.body,
    LIST_CANCEL_REASONS_BY_ORDER_OPERATION_ID,
  );
}
