// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1PaidStorageTasksTaskIdStatusResponse } from "./contract.js";
import type {
  GetV1PaidStorageTasksTaskIdStatusInput,
  GetV1PaidStorageTasksTaskIdStatusResponse,
} from "./types.js";

export const GET_V1_PAID_STORAGE_TASKS_TASK_ID_STATUS_OPERATION_ID =
  "getV1PaidStorageTasksTaskIdStatus";

const definition: WbOperationDefinition<GetV1PaidStorageTasksTaskIdStatusResponse> =
  {
    operationId: GET_V1_PAID_STORAGE_TASKS_TASK_ID_STATUS_OPERATION_ID,
    method: "GET",
    path: "/api/v1/paid_storage/tasks/{task_id}/status",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [
      { name: "task_id", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1PaidStorageTasksTaskIdStatusResponse,
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1PaidStorageTasksTaskIdStatus(
  execute: WbOperationExecutor,
  input: GetV1PaidStorageTasksTaskIdStatusInput,
  options: WbRequestOptions = {},
): Promise<GetV1PaidStorageTasksTaskIdStatusResponse> {
  return execute(definition, input, options);
}
