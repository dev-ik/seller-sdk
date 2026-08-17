// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AnalyticsBrandShareParentSubjectsResponse } from "./contract.js";
import type {
  GetV1AnalyticsBrandShareParentSubjectsInput,
  GetV1AnalyticsBrandShareParentSubjectsResponse,
} from "./types.js";

export const GET_V1_ANALYTICS_BRAND_SHARE_PARENT_SUBJECTS_OPERATION_ID =
  "getV1AnalyticsBrandShareParentSubjects";

const definition: WbOperationDefinition<GetV1AnalyticsBrandShareParentSubjectsResponse> =
  {
    operationId: GET_V1_ANALYTICS_BRAND_SHARE_PARENT_SUBJECTS_OPERATION_ID,
    method: "GET",
    path: "/api/v1/analytics/brand-share/parent-subjects",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [
      { name: "locale", location: "query", required: false, array: false },
      { name: "brand", location: "query", required: true, array: false },
      { name: "dateFrom", location: "query", required: true, array: false },
      { name: "dateTo", location: "query", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1AnalyticsBrandShareParentSubjectsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1AnalyticsBrandShareParentSubjects(
  execute: WbOperationExecutor,
  input: GetV1AnalyticsBrandShareParentSubjectsInput,
  options: WbRequestOptions = {},
): Promise<GetV1AnalyticsBrandShareParentSubjectsResponse> {
  return execute(definition, input, options);
}
