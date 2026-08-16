import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { cancelOrderResponseSchema } from "./contract.js";
import type { CancelOrderRequest, CancelOrderResponse } from "./types.js";

export const CANCEL_ORDER_OPERATION_ID = "OrderAPI_OrderCancel";

/** @internal */
export async function executeCancelOrder(
  transport: Transport,
  input: CancelOrderRequest,
  options: OzonRequestOptions = {},
): Promise<CancelOrderResponse> {
  const response = await transport.request({
    operationId: CANCEL_ORDER_OPERATION_ID,
    method: "POST",
    path: "/v1/order/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    cancelOrderResponseSchema,
    response.body,
    CANCEL_ORDER_OPERATION_ID,
  );
}
