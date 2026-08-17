// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseDeleteApiV3StocksWarehouseIdResponse } from "./contract.js";
import type {
  DeleteApiV3StocksWarehouseIdInput,
  DeleteApiV3StocksWarehouseIdResponse,
} from "./types.js";

export const DELETE_API_V3_STOCKS_WAREHOUSE_ID_OPERATION_ID =
  "DELETE /api/v3/stocks/{warehouseId}";

const definition: WbOperationDefinition<DeleteApiV3StocksWarehouseIdResponse> =
  {
    operationId: DELETE_API_V3_STOCKS_WAREHOUSE_ID_OPERATION_ID,
    method: "DELETE",
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
    parseResponse: parseDeleteApiV3StocksWarehouseIdResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executeDeleteApiV3StocksWarehouseId(
  execute: WbOperationExecutor,
  input: DeleteApiV3StocksWarehouseIdInput,
  options: WbRequestOptions = {},
): Promise<DeleteApiV3StocksWarehouseIdResponse> {
  return execute(definition, input, options);
}
