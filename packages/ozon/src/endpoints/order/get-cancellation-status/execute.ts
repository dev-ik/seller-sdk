import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getOrderCancellationStatusResponseSchema } from "./contract.js";
import type {
  GetOrderCancellationStatusRequest,
  GetOrderCancellationStatusResponse,
} from "./types.js";

export const GET_ORDER_CANCELLATION_STATUS_OPERATION_ID =
  "OrderAPI_OrderCancelStatus";

/** @internal */
export async function executeGetOrderCancellationStatus(
  transport: Transport,
  input: GetOrderCancellationStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetOrderCancellationStatusResponse> {
  const response = await transport.request({
    operationId: GET_ORDER_CANCELLATION_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/order/cancel/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getOrderCancellationStatusResponseSchema,
    response.body,
    GET_ORDER_CANCELLATION_STATUS_OPERATION_ID,
  );
}
