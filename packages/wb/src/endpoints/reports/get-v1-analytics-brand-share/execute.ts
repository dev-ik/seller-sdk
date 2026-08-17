// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AnalyticsBrandShareResponse } from "./contract.js";
import type {
  GetV1AnalyticsBrandShareInput,
  GetV1AnalyticsBrandShareResponse,
} from "./types.js";

export const GET_V1_ANALYTICS_BRAND_SHARE_OPERATION_ID =
  "getV1AnalyticsBrandShare";

const definition: WbOperationDefinition<GetV1AnalyticsBrandShareResponse> = {
  operationId: GET_V1_ANALYTICS_BRAND_SHARE_OPERATION_ID,
  method: "GET",
  path: "/api/v1/analytics/brand-share",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    { name: "parentId", location: "query", required: true, array: false },
    { name: "brand", location: "query", required: true, array: false },
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1AnalyticsBrandShareResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1AnalyticsBrandShare(
  execute: WbOperationExecutor,
  input: GetV1AnalyticsBrandShareInput,
  options: WbRequestOptions = {},
): Promise<GetV1AnalyticsBrandShareResponse> {
  return execute(definition, input, options);
}
