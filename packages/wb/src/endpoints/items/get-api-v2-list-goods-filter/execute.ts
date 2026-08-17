// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV2ListGoodsFilterResponse } from "./contract.js";
import type {
  GetApiV2ListGoodsFilterInput,
  GetApiV2ListGoodsFilterResponse,
} from "./types.js";

export const GET_API_V2_LIST_GOODS_FILTER_OPERATION_ID =
  "GET /api/v2/list/goods/filter";

const definition: WbOperationDefinition<GetApiV2ListGoodsFilterResponse> = {
  operationId: GET_API_V2_LIST_GOODS_FILTER_OPERATION_ID,
  method: "GET",
  path: "/api/v2/list/goods/filter",
  productionOrigin: "https://discounts-prices-api.wildberries.ru",
  sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: true, array: false },
    { name: "offset", location: "query", required: false, array: false },
    { name: "filterNmID", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV2ListGoodsFilterResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV2ListGoodsFilter(
  execute: WbOperationExecutor,
  input: GetApiV2ListGoodsFilterInput,
  options: WbRequestOptions = {},
): Promise<GetApiV2ListGoodsFilterResponse> {
  return execute(definition, input, options);
}
