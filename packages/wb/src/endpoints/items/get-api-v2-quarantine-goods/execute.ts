// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV2QuarantineGoodsResponse } from "./contract.js";
import type {
  GetApiV2QuarantineGoodsInput,
  GetApiV2QuarantineGoodsResponse,
} from "./types.js";

export const GET_API_V2_QUARANTINE_GOODS_OPERATION_ID =
  "GET /api/v2/quarantine/goods";

const definition: WbOperationDefinition<GetApiV2QuarantineGoodsResponse> = {
  operationId: GET_API_V2_QUARANTINE_GOODS_OPERATION_ID,
  method: "GET",
  path: "/api/v2/quarantine/goods",
  productionOrigin: "https://discounts-prices-api.wildberries.ru",
  sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: true, array: false },
    { name: "offset", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiV2QuarantineGoodsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetApiV2QuarantineGoods(
  execute: WbOperationExecutor,
  input: GetApiV2QuarantineGoodsInput,
  options: WbRequestOptions = {},
): Promise<GetApiV2QuarantineGoodsResponse> {
  return execute(definition, input, options);
}
