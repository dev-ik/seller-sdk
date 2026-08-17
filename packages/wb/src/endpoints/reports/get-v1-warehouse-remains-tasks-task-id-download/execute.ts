// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1WarehouseRemainsTasksTaskIdDownloadResponse } from "./contract.js";
import type {
  GetV1WarehouseRemainsTasksTaskIdDownloadInput,
  GetV1WarehouseRemainsTasksTaskIdDownloadResponse,
} from "./types.js";

export const GET_V1_WAREHOUSE_REMAINS_TASKS_TASK_ID_DOWNLOAD_OPERATION_ID =
  "getV1WarehouseRemainsTasksTaskIdDownload";

const definition: WbOperationDefinition<GetV1WarehouseRemainsTasksTaskIdDownloadResponse> =
  {
    operationId: GET_V1_WAREHOUSE_REMAINS_TASKS_TASK_ID_DOWNLOAD_OPERATION_ID,
    method: "GET",
    path: "/api/v1/warehouse_remains/tasks/{task_id}/download",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [
      { name: "task_id", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1WarehouseRemainsTasksTaskIdDownloadResponse,
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1WarehouseRemainsTasksTaskIdDownload(
  execute: WbOperationExecutor,
  input: GetV1WarehouseRemainsTasksTaskIdDownloadInput,
  options: WbRequestOptions = {},
): Promise<GetV1WarehouseRemainsTasksTaskIdDownloadResponse> {
  return execute(definition, input, options);
}
