// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV2BufferTasksResponse } from "./contract.js";
import type {
  GetApiV2BufferTasksInput,
  GetApiV2BufferTasksResponse,
} from "./types.js";

export const GET_API_V2_BUFFER_TASKS_OPERATION_ID = "GET /api/v2/buffer/tasks";

const definition: WbOperationDefinition<GetApiV2BufferTasksResponse> = {
  operationId: GET_API_V2_BUFFER_TASKS_OPERATION_ID,
  method: "GET",
  path: "/api/v2/buffer/tasks",
  productionOrigin: "https://discounts-prices-api.wildberries.ru",
  sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
  parameters: [
    { name: "uploadID", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV2BufferTasksResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV2BufferTasks(
  execute: WbOperationExecutor,
  input: GetApiV2BufferTasksInput,
  options: WbRequestOptions = {},
): Promise<GetApiV2BufferTasksResponse> {
  return execute(definition, input, options);
}
