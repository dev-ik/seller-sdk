// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1PaidStorageTasksTaskIdDownloadResponse } from "./contract.js";
import type {
  GetV1PaidStorageTasksTaskIdDownloadInput,
  GetV1PaidStorageTasksTaskIdDownloadResponse,
} from "./types.js";

export const GET_V1_PAID_STORAGE_TASKS_TASK_ID_DOWNLOAD_OPERATION_ID =
  "getV1PaidStorageTasksTaskIdDownload";

const definition: WbOperationDefinition<GetV1PaidStorageTasksTaskIdDownloadResponse> =
  {
    operationId: GET_V1_PAID_STORAGE_TASKS_TASK_ID_DOWNLOAD_OPERATION_ID,
    method: "GET",
    path: "/api/v1/paid_storage/tasks/{task_id}/download",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [
      { name: "task_id", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1PaidStorageTasksTaskIdDownloadResponse,
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1PaidStorageTasksTaskIdDownload(
  execute: WbOperationExecutor,
  input: GetV1PaidStorageTasksTaskIdDownloadInput,
  options: WbRequestOptions = {},
): Promise<GetV1PaidStorageTasksTaskIdDownloadResponse> {
  return execute(definition, input, options);
}
