// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV3StocksWarehouseIdResponse } from "./contract.js";
import type {
  PostApiV3StocksWarehouseIdInput,
  PostApiV3StocksWarehouseIdResponse,
} from "./types.js";

export const POST_API_V3_STOCKS_WAREHOUSE_ID_OPERATION_ID =
  "POST /api/v3/stocks/{warehouseId}";

const definition: WbOperationDefinition<PostApiV3StocksWarehouseIdResponse> = {
  operationId: POST_API_V3_STOCKS_WAREHOUSE_ID_OPERATION_ID,
  method: "POST",
  path: "/api/v3/stocks/{warehouseId}",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "warehouseId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostApiV3StocksWarehouseIdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostApiV3StocksWarehouseId(
  execute: WbOperationExecutor,
  input: PostApiV3StocksWarehouseIdInput,
  options: WbRequestOptions = {},
): Promise<PostApiV3StocksWarehouseIdResponse> {
  return execute(definition, input, options);
}
