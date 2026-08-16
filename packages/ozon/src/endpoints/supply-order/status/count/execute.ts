import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { countSupplyOrdersByStatusResponseSchema } from "./contract.js";
import type { CountSupplyOrdersByStatusResponse } from "./types.js";

export const COUNT_SUPPLY_ORDERS_BY_STATUS_OPERATION_ID =
  "SupplyOrderAPI_SupplyOrderStatusCounter";

export async function executeCountSupplyOrdersByStatus(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<CountSupplyOrdersByStatusResponse> {
  const response = await transport.request({
    operationId: COUNT_SUPPLY_ORDERS_BY_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/supply-order/status/counter",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    countSupplyOrdersByStatusResponseSchema,
    response.body,
    COUNT_SUPPLY_ORDERS_BY_STATUS_OPERATION_ID,
  );
}
