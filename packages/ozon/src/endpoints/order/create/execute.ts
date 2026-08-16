import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { createOrderResponseSchema } from "./contract.js";
import type { CreateOrderRequest, CreateOrderResponse } from "./types.js";

export const CREATE_ORDER_OPERATION_ID = "OrderAPI_OrderCreate";

/** @internal */
export async function executeCreateOrder(
  transport: Transport,
  input: CreateOrderRequest,
  options: OzonRequestOptions = {},
): Promise<CreateOrderResponse> {
  const response = await transport.request({
    operationId: CREATE_ORDER_OPERATION_ID,
    method: "POST",
    path: "/v2/order/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    createOrderResponseSchema,
    response.body,
    CREATE_ORDER_OPERATION_ID,
  );
}
