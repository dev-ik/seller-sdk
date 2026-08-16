import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getSupplyOrderContentUpdateStatusResponseSchema } from "./contract.js";
import type {
  GetSupplyOrderContentUpdateStatusRequest,
  GetSupplyOrderContentUpdateStatusResponse,
} from "./types.js";
export const GET_SUPPLY_ORDER_CONTENT_UPDATE_STATUS_OPERATION_ID =
  "SupplyOrderAPI_SupplyOrderContentUpdateStatus";
export async function executeGetSupplyOrderContentUpdateStatus(
  transport: Transport,
  input: GetSupplyOrderContentUpdateStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyOrderContentUpdateStatusResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_ORDER_CONTENT_UPDATE_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/content/update/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getSupplyOrderContentUpdateStatusResponseSchema,
    response.body,
    GET_SUPPLY_ORDER_CONTENT_UPDATE_STATUS_OPERATION_ID,
  );
}
