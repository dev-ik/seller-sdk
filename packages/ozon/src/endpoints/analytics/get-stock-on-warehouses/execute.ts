import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getAnalyticsStockOnWarehousesResponseSchema } from "./contract.js";
import type {
  GetAnalyticsStockOnWarehousesRequest,
  GetAnalyticsStockOnWarehousesResponse,
} from "./types.js";

export const GET_ANALYTICS_STOCK_ON_WAREHOUSES_OPERATION_ID =
  "AnalyticsAPI_AnalyticsGetStockOnWarehousesV2";

/** @internal */
export async function executeGetAnalyticsStockOnWarehouses(
  transport: Transport,
  input: GetAnalyticsStockOnWarehousesRequest,
  options: OzonRequestOptions = {},
): Promise<GetAnalyticsStockOnWarehousesResponse> {
  const response = await transport.request({
    operationId: GET_ANALYTICS_STOCK_ON_WAREHOUSES_OPERATION_ID,
    method: "POST",
    path: "/v2/analytics/stock_on_warehouses",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getAnalyticsStockOnWarehousesResponseSchema,
    response.body,
    GET_ANALYTICS_STOCK_ON_WAREHOUSES_OPERATION_ID,
  );
}
