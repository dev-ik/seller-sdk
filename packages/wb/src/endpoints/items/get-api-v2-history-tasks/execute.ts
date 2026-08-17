// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV2HistoryTasksResponse } from "./contract.js";
import type {
  GetApiV2HistoryTasksInput,
  GetApiV2HistoryTasksResponse,
} from "./types.js";

export const GET_API_V2_HISTORY_TASKS_OPERATION_ID =
  "GET /api/v2/history/tasks";

const definition: WbOperationDefinition<GetApiV2HistoryTasksResponse> = {
  operationId: GET_API_V2_HISTORY_TASKS_OPERATION_ID,
  method: "GET",
  path: "/api/v2/history/tasks",
  productionOrigin: "https://discounts-prices-api.wildberries.ru",
  sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
  parameters: [
    { name: "uploadID", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV2HistoryTasksResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV2HistoryTasks(
  execute: WbOperationExecutor,
  input: GetApiV2HistoryTasksInput,
  options: WbRequestOptions = {},
): Promise<GetApiV2HistoryTasksResponse> {
  return execute(definition, input, options);
}
