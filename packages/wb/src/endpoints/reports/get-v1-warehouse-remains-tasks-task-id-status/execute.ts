// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1WarehouseRemainsTasksTaskIdStatusResponse } from "./contract.js";
import type {
  GetV1WarehouseRemainsTasksTaskIdStatusInput,
  GetV1WarehouseRemainsTasksTaskIdStatusResponse,
} from "./types.js";

export const GET_V1_WAREHOUSE_REMAINS_TASKS_TASK_ID_STATUS_OPERATION_ID =
  "getV1WarehouseRemainsTasksTaskIdStatus";

const definition: WbOperationDefinition<GetV1WarehouseRemainsTasksTaskIdStatusResponse> =
  {
    operationId: GET_V1_WAREHOUSE_REMAINS_TASKS_TASK_ID_STATUS_OPERATION_ID,
    method: "GET",
    path: "/api/v1/warehouse_remains/tasks/{task_id}/status",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    parameters: [
      { name: "task_id", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetV1WarehouseRemainsTasksTaskIdStatusResponse,
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  };

export function executeGetV1WarehouseRemainsTasksTaskIdStatus(
  execute: WbOperationExecutor,
  input: GetV1WarehouseRemainsTasksTaskIdStatusInput,
  options: WbRequestOptions = {},
): Promise<GetV1WarehouseRemainsTasksTaskIdStatusResponse> {
  return execute(definition, input, options);
}
