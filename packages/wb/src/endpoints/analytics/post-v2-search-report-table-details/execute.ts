// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2SearchReportTableDetailsResponse } from "./contract.js";
import type {
  PostV2SearchReportTableDetailsInput,
  PostV2SearchReportTableDetailsResponse,
} from "./types.js";

export const POST_V2_SEARCH_REPORT_TABLE_DETAILS_OPERATION_ID =
  "postV2SearchReportTableDetails";

const definition: WbOperationDefinition<PostV2SearchReportTableDetailsResponse> =
  {
    operationId: POST_V2_SEARCH_REPORT_TABLE_DETAILS_OPERATION_ID,
    method: "POST",
    path: "/api/v2/search-report/table/details",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV2SearchReportTableDetailsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  };

export function executePostV2SearchReportTableDetails(
  execute: WbOperationExecutor,
  input: PostV2SearchReportTableDetailsInput,
  options: WbRequestOptions = {},
): Promise<PostV2SearchReportTableDetailsResponse> {
  return execute(definition, input, options);
}
