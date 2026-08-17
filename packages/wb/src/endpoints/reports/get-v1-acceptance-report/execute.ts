// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AcceptanceReportResponse } from "./contract.js";
import type {
  GetV1AcceptanceReportInput,
  GetV1AcceptanceReportResponse,
} from "./types.js";

export const GET_V1_ACCEPTANCE_REPORT_OPERATION_ID = "getV1AcceptanceReport";

const definition: WbOperationDefinition<GetV1AcceptanceReportResponse> = {
  operationId: GET_V1_ACCEPTANCE_REPORT_OPERATION_ID,
  method: "GET",
  path: "/api/v1/acceptance_report",
  productionOrigin: "https://seller-analytics-api.wildberries.ru",
  parameters: [
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1AcceptanceReportResponse,
  source: "https://dev.wildberries.ru/docs/openapi/reports",
  verifiedAt: "2026-08-17",
};

export function executeGetV1AcceptanceReport(
  execute: WbOperationExecutor,
  input: GetV1AcceptanceReportInput,
  options: WbRequestOptions = {},
): Promise<GetV1AcceptanceReportResponse> {
  return execute(definition, input, options);
}
