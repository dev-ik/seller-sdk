// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV2BufferGoodsTaskResponse } from "./contract.js";
import type {
  GetApiV2BufferGoodsTaskInput,
  GetApiV2BufferGoodsTaskResponse,
} from "./types.js";

export const GET_API_V2_BUFFER_GOODS_TASK_OPERATION_ID =
  "GET /api/v2/buffer/goods/task";

const definition: WbOperationDefinition<GetApiV2BufferGoodsTaskResponse> = {
  operationId: GET_API_V2_BUFFER_GOODS_TASK_OPERATION_ID,
  method: "GET",
  path: "/api/v2/buffer/goods/task",
  productionOrigin: "https://discounts-prices-api.wildberries.ru",
  sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: true, array: false },
    { name: "offset", location: "query", required: false, array: false },
    { name: "uploadID", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV2BufferGoodsTaskResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV2BufferGoodsTask(
  execute: WbOperationExecutor,
  input: GetApiV2BufferGoodsTaskInput,
  options: WbRequestOptions = {},
): Promise<GetApiV2BufferGoodsTaskResponse> {
  return execute(definition, input, options);
}
