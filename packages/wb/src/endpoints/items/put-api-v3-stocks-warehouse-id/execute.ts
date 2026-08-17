// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutApiV3StocksWarehouseIdResponse } from "./contract.js";
import type {
  PutApiV3StocksWarehouseIdInput,
  PutApiV3StocksWarehouseIdResponse,
} from "./types.js";

export const PUT_API_V3_STOCKS_WAREHOUSE_ID_OPERATION_ID =
  "PUT /api/v3/stocks/{warehouseId}";

const definition: WbOperationDefinition<PutApiV3StocksWarehouseIdResponse> = {
  operationId: PUT_API_V3_STOCKS_WAREHOUSE_ID_OPERATION_ID,
  method: "PUT",
  path: "/api/v3/stocks/{warehouseId}",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "warehouseId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePutApiV3StocksWarehouseIdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePutApiV3StocksWarehouseId(
  execute: WbOperationExecutor,
  input: PutApiV3StocksWarehouseIdInput,
  options: WbRequestOptions = {},
): Promise<PutApiV3StocksWarehouseIdResponse> {
  return execute(definition, input, options);
}
