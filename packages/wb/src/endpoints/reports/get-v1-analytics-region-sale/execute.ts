// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AnalyticsRegionSaleResponse } from "./contract.js";
import type {
  GetV1AnalyticsRegionSaleInput,
  GetV1AnalyticsRegionSaleResponse,
} from "./types.js";

export const GET_V1_ANALYTICS_REGION_SALE_OPERATION_ID =
  "getV1AnalyticsRegionSale";

const definition: WbOperationDefinition<GetV1AnalyticsRegionSaleResponse> = {
  operationId: GET_V1_ANALYTICS_REGION_SALE_OPERATION_ID,
  method: "GET",
  path: "/api/v1/analytics/region-sale",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1AnalyticsRegionSaleResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1AnalyticsRegionSale(
  execute: WbOperationExecutor,
  input: GetV1AnalyticsRegionSaleInput,
  options: WbRequestOptions = {},
): Promise<GetV1AnalyticsRegionSaleResponse> {
  return execute(definition, input, options);
}
