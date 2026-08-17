// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1SalesReportsDetailedReportIdResponse } from "./contract.js";
import type {
  PostV1SalesReportsDetailedReportIdInput,
  PostV1SalesReportsDetailedReportIdResponse,
} from "./types.js";

export const POST_V1_SALES_REPORTS_DETAILED_REPORT_ID_OPERATION_ID =
  "postV1SalesReportsDetailedReportId";

const definition: WbOperationDefinition<PostV1SalesReportsDetailedReportIdResponse> =
  {
    operationId: POST_V1_SALES_REPORTS_DETAILED_REPORT_ID_OPERATION_ID,
    method: "POST",
    path: "/api/finance/v1/sales-reports/detailed/{reportId}",
    productionOrigin: "https://finance-api.wildberries.ru",
    parameters: [
      { name: "reportId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV1SalesReportsDetailedReportIdResponse,
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  };

export function executePostV1SalesReportsDetailedReportId(
  execute: WbOperationExecutor,
  input: PostV1SalesReportsDetailedReportIdInput,
  options: WbRequestOptions = {},
): Promise<PostV1SalesReportsDetailedReportIdResponse> {
  return execute(definition, input, options);
}
