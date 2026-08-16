import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { cancelSupplyOrderResponseSchema } from "./contract.js";
import type {
  CancelSupplyOrderRequest,
  CancelSupplyOrderResponse,
} from "./types.js";

export const CANCEL_SUPPLY_ORDER_OPERATION_ID =
  "SupplyOrderAPI_SupplyOrderCancel";

export async function executeCancelSupplyOrder(
  transport: Transport,
  input: CancelSupplyOrderRequest,
  options: OzonRequestOptions = {},
): Promise<CancelSupplyOrderResponse> {
  const response = await transport.request({
    operationId: CANCEL_SUPPLY_ORDER_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/cancel",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    cancelSupplyOrderResponseSchema,
    response.body,
    CANCEL_SUPPLY_ORDER_OPERATION_ID,
  );
}
