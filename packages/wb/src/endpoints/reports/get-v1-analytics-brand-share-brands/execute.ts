// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AnalyticsBrandShareBrandsResponse } from "./contract.js";
import type { GetV1AnalyticsBrandShareBrandsResponse } from "./types.js";

export const GET_V1_ANALYTICS_BRAND_SHARE_BRANDS_OPERATION_ID =
  "getV1AnalyticsBrandShareBrands";

const definition: WbOperationDefinition<GetV1AnalyticsBrandShareBrandsResponse> =
  {
    operationId: GET_V1_ANALYTICS_BRAND_SHARE_BRANDS_OPERATION_ID,
    method: "GET",
    path: "/api/v1/analytics/brand-share/brands",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1AnalyticsBrandShareBrandsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1AnalyticsBrandShareBrands(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1AnalyticsBrandShareBrandsResponse> {
  return execute(definition, undefined, options);
}
