// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV2HistoryGoodsTaskResponse } from "./contract.js";
import type {
  GetApiV2HistoryGoodsTaskInput,
  GetApiV2HistoryGoodsTaskResponse,
} from "./types.js";

export const GET_API_V2_HISTORY_GOODS_TASK_OPERATION_ID =
  "GET /api/v2/history/goods/task";

const definition: WbOperationDefinition<GetApiV2HistoryGoodsTaskResponse> = {
  operationId: GET_API_V2_HISTORY_GOODS_TASK_OPERATION_ID,
  method: "GET",
  path: "/api/v2/history/goods/task",
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
  parseResponse: parseGetApiV2HistoryGoodsTaskResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV2HistoryGoodsTask(
  execute: WbOperationExecutor,
  input: GetApiV2HistoryGoodsTaskInput,
  options: WbRequestOptions = {},
): Promise<GetApiV2HistoryGoodsTaskResponse> {
  return execute(definition, input, options);
}
