// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV2ListGoodsSizeNmResponse } from "./contract.js";
import type {
  GetApiV2ListGoodsSizeNmInput,
  GetApiV2ListGoodsSizeNmResponse,
} from "./types.js";

export const GET_API_V2_LIST_GOODS_SIZE_NM_OPERATION_ID =
  "GET /api/v2/list/goods/size/nm";

const definition: WbOperationDefinition<GetApiV2ListGoodsSizeNmResponse> = {
  operationId: GET_API_V2_LIST_GOODS_SIZE_NM_OPERATION_ID,
  method: "GET",
  path: "/api/v2/list/goods/size/nm",
  productionOrigin: "https://discounts-prices-api.wildberries.ru",
  sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: true, array: false },
    { name: "offset", location: "query", required: false, array: false },
    { name: "nmID", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV2ListGoodsSizeNmResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV2ListGoodsSizeNm(
  execute: WbOperationExecutor,
  input: GetApiV2ListGoodsSizeNmInput,
  options: WbRequestOptions = {},
): Promise<GetApiV2ListGoodsSizeNmResponse> {
  return execute(definition, input, options);
}
