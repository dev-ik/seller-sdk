import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { acceptSupplyOrderActResponseSchema } from "./contract.js";
import type {
  AcceptSupplyOrderActRequest,
  AcceptSupplyOrderActResponse,
} from "./types.js";
export const ACCEPT_SUPPLY_ORDER_ACT_OPERATION_ID = "SupplyOrderActAccept";
export async function executeAcceptSupplyOrderAct(
  transport: Transport,
  input: AcceptSupplyOrderActRequest,
  options: OzonRequestOptions = {},
): Promise<AcceptSupplyOrderActResponse> {
  const response = await transport.request({
    operationId: ACCEPT_SUPPLY_ORDER_ACT_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/act/accept",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    acceptSupplyOrderActResponseSchema,
    response.body,
    ACCEPT_SUPPLY_ORDER_ACT_OPERATION_ID,
  );
}
