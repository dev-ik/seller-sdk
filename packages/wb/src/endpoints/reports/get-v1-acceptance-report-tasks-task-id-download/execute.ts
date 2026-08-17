// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AcceptanceReportTasksTaskIdDownloadResponse } from "./contract.js";
import type {
  GetV1AcceptanceReportTasksTaskIdDownloadInput,
  GetV1AcceptanceReportTasksTaskIdDownloadResponse,
} from "./types.js";

export const GET_V1_ACCEPTANCE_REPORT_TASKS_TASK_ID_DOWNLOAD_OPERATION_ID =
  "getV1AcceptanceReportTasksTaskIdDownload";

const definition: WbOperationDefinition<GetV1AcceptanceReportTasksTaskIdDownloadResponse> =
  {
    operationId: GET_V1_ACCEPTANCE_REPORT_TASKS_TASK_ID_DOWNLOAD_OPERATION_ID,
    method: "GET",
    path: "/api/v1/acceptance_report/tasks/{task_id}/download",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [
      { name: "task_id", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1AcceptanceReportTasksTaskIdDownloadResponse,
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1AcceptanceReportTasksTaskIdDownload(
  execute: WbOperationExecutor,
  input: GetV1AcceptanceReportTasksTaskIdDownloadInput,
  options: WbRequestOptions = {},
): Promise<GetV1AcceptanceReportTasksTaskIdDownloadResponse> {
  return execute(definition, input, options);
}
