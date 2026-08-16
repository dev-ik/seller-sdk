import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { checkOrderCancellationResponseSchema } from "./contract.js";
import type {
  CheckOrderCancellationRequest,
  CheckOrderCancellationResponse,
} from "./types.js";

export const CHECK_ORDER_CANCELLATION_OPERATION_ID =
  "OrderAPI_OrderCancelCheck";

/** @internal */
export async function executeCheckOrderCancellation(
  transport: Transport,
  input: CheckOrderCancellationRequest,
  options: OzonRequestOptions = {},
): Promise<CheckOrderCancellationResponse> {
  const response = await transport.request({
    operationId: CHECK_ORDER_CANCELLATION_OPERATION_ID,
    method: "POST",
    path: "/v1/order/cancel/check",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    checkOrderCancellationResponseSchema,
    response.body,
    CHECK_ORDER_CANCELLATION_OPERATION_ID,
  );
}
