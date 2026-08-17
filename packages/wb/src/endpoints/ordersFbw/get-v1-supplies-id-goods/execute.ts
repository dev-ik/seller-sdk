// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SuppliesIdGoodsResponse } from "./contract.js";
import type {
  GetV1SuppliesIdGoodsInput,
  GetV1SuppliesIdGoodsResponse,
} from "./types.js";

export const GET_V1_SUPPLIES_ID_GOODS_OPERATION_ID = "getV1SuppliesIdGoods";

const definition: WbOperationDefinition<GetV1SuppliesIdGoodsResponse> = {
  operationId: GET_V1_SUPPLIES_ID_GOODS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/supplies/{ID}/goods",
  productionOrigin: "https://supplies-api.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: false, array: false },
    { name: "offset", location: "query", required: false, array: false },
    { name: "isPreorderID", location: "query", required: false, array: false },
    { name: "ID", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1SuppliesIdGoodsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
  verifiedAt: "2026-08-17",
};

export function executeGetV1SuppliesIdGoods(
  execute: WbOperationExecutor,
  input: GetV1SuppliesIdGoodsInput,
  options: WbRequestOptions = {},
): Promise<GetV1SuppliesIdGoodsResponse> {
  return execute(definition, input, options);
}
