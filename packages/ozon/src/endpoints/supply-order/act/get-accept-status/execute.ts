import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getSupplyOrderActAcceptanceStatusResponseSchema } from "./contract.js";
import type {
  GetSupplyOrderActAcceptanceStatusRequest,
  GetSupplyOrderActAcceptanceStatusResponse,
} from "./types.js";
export const GET_SUPPLY_ORDER_ACT_ACCEPTANCE_STATUS_OPERATION_ID =
  "SupplyOrderActAcceptStatus";
export async function executeGetSupplyOrderActAcceptanceStatus(
  transport: Transport,
  input: GetSupplyOrderActAcceptanceStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrderActAcceptanceStatusResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDER_ACT_ACCEPTANCE_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/act/accept/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyOrderActAcceptanceStatusResponseSchema,
    response.body,
    GET_SUPPLY_ORDER_ACT_ACCEPTANCE_STATUS_OPERATION_ID,
  );
}
