// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2SearchReportReportResponse } from "./contract.js";
import type {
  PostV2SearchReportReportInput,
  PostV2SearchReportReportResponse,
} from "./types.js";

export const POST_V2_SEARCH_REPORT_REPORT_OPERATION_ID =
  "postV2SearchReportReport";

const definition: WbOperationDefinition<PostV2SearchReportReportResponse> = {
  operationId: POST_V2_SEARCH_REPORT_REPORT_OPERATION_ID,
  method: "POST",
  path: "/api/v2/search-report/report",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV2SearchReportReportResponse,
  source: "https://dev.wildberries.ru/docs/openapi/analytics",
  verifiedAt: "2026-08-17",
};

export function executePostV2SearchReportReport(
  execute: WbOperationExecutor,
  input: PostV2SearchReportReportInput,
  options: WbRequestOptions = {},
): Promise<PostV2SearchReportReportResponse> {
  return execute(definition, input, options);
}
