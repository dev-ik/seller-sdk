// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV2ListGoodsFilterResponse } from "./contract.js";
import type {
  PostApiV2ListGoodsFilterInput,
  PostApiV2ListGoodsFilterResponse,
} from "./types.js";

export const POST_API_V2_LIST_GOODS_FILTER_OPERATION_ID =
  "POST /api/v2/list/goods/filter";

const definition: WbOperationDefinition<PostApiV2ListGoodsFilterResponse> = {
  operationId: POST_API_V2_LIST_GOODS_FILTER_OPERATION_ID,
  method: "POST",
  path: "/api/v2/list/goods/filter",
  productionOrigin: "https://discounts-prices-api.wildberries.ru",
  sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostApiV2ListGoodsFilterResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostApiV2ListGoodsFilter(
  execute: WbOperationExecutor,
  input: PostApiV2ListGoodsFilterInput,
  options: WbRequestOptions = {},
): Promise<PostApiV2ListGoodsFilterResponse> {
  return execute(definition, input, options);
}
