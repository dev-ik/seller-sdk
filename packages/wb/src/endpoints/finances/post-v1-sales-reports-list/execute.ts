// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1SalesReportsListResponse } from "./contract.js";
import type {
  PostV1SalesReportsListInput,
  PostV1SalesReportsListResponse,
} from "./types.js";

export const POST_V1_SALES_REPORTS_LIST_OPERATION_ID = "postV1SalesReportsList";

const definition: WbOperationDefinition<PostV1SalesReportsListResponse> = {
  operationId: POST_V1_SALES_REPORTS_LIST_OPERATION_ID,
  method: "POST",
  path: "/api/finance/v1/sales-reports/list",
  productionOrigin: "https://finance-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1SalesReportsListResponse,
  source: "https://dev.wildberries.ru/docs/openapi/finances",
  verifiedAt: "2026-08-17",
};

export function executePostV1SalesReportsList(
  execute: WbOperationExecutor,
  input: PostV1SalesReportsListInput,
  options: WbRequestOptions = {},
): Promise<PostV1SalesReportsListResponse> {
  return execute(definition, input, options);
}
