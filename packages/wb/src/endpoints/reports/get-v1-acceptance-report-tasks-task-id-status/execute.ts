// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AcceptanceReportTasksTaskIdStatusResponse } from "./contract.js";
import type {
  GetV1AcceptanceReportTasksTaskIdStatusInput,
  GetV1AcceptanceReportTasksTaskIdStatusResponse,
} from "./types.js";

export const GET_V1_ACCEPTANCE_REPORT_TASKS_TASK_ID_STATUS_OPERATION_ID =
  "getV1AcceptanceReportTasksTaskIdStatus";

const definition: WbOperationDefinition<GetV1AcceptanceReportTasksTaskIdStatusResponse> =
  {
    operationId: GET_V1_ACCEPTANCE_REPORT_TASKS_TASK_ID_STATUS_OPERATION_ID,
    method: "GET",
    path: "/api/v1/acceptance_report/tasks/{task_id}/status",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [
      { name: "task_id", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1AcceptanceReportTasksTaskIdStatusResponse,
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1AcceptanceReportTasksTaskIdStatus(
  execute: WbOperationExecutor,
  input: GetV1AcceptanceReportTasksTaskIdStatusInput,
  options: WbRequestOptions = {},
): Promise<GetV1AcceptanceReportTasksTaskIdStatusResponse> {
  return execute(definition, input, options);
}
