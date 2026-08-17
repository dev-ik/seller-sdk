// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1AnalyticsExciseReportResponse } from "./contract.js";
import type {
  PostV1AnalyticsExciseReportInput,
  PostV1AnalyticsExciseReportResponse,
} from "./types.js";

export const POST_V1_ANALYTICS_EXCISE_REPORT_OPERATION_ID =
  "postV1AnalyticsExciseReport";

const definition: WbOperationDefinition<PostV1AnalyticsExciseReportResponse> = {
  operationId: POST_V1_ANALYTICS_EXCISE_REPORT_OPERATION_ID,
  method: "POST",
  path: "/api/v1/analytics/excise-report",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1AnalyticsExciseReportResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executePostV1AnalyticsExciseReport(
  execute: WbOperationExecutor,
  input: PostV1AnalyticsExciseReportInput,
  options: WbRequestOptions = {},
): Promise<PostV1AnalyticsExciseReportResponse> {
  return execute(definition, input, options);
}
