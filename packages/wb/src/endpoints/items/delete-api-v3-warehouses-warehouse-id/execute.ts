// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseDeleteApiV3WarehousesWarehouseIdResponse } from "./contract.js";
import type {
  DeleteApiV3WarehousesWarehouseIdInput,
  DeleteApiV3WarehousesWarehouseIdResponse,
} from "./types.js";

export const DELETE_API_V3_WAREHOUSES_WAREHOUSE_ID_OPERATION_ID =
  "DELETE /api/v3/warehouses/{warehouseId}";

const definition: WbOperationDefinition<DeleteApiV3WarehousesWarehouseIdResponse> =
  {
    operationId: DELETE_API_V3_WAREHOUSES_WAREHOUSE_ID_OPERATION_ID,
    method: "DELETE",
    path: "/api/v3/warehouses/{warehouseId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "warehouseId", location: "path", required: true, array: false },
    ],
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseDeleteApiV3WarehousesWarehouseIdResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executeDeleteApiV3WarehousesWarehouseId(
  execute: WbOperationExecutor,
  input: DeleteApiV3WarehousesWarehouseIdInput,
  options: WbRequestOptions = {},
): Promise<DeleteApiV3WarehousesWarehouseIdResponse> {
  return execute(definition, input, options);
}
