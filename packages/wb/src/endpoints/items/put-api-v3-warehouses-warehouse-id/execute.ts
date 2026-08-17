// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutApiV3WarehousesWarehouseIdResponse } from "./contract.js";
import type {
  PutApiV3WarehousesWarehouseIdInput,
  PutApiV3WarehousesWarehouseIdResponse,
} from "./types.js";

export const PUT_API_V3_WAREHOUSES_WAREHOUSE_ID_OPERATION_ID =
  "PUT /api/v3/warehouses/{warehouseId}";

const definition: WbOperationDefinition<PutApiV3WarehousesWarehouseIdResponse> =
  {
    operationId: PUT_API_V3_WAREHOUSES_WAREHOUSE_ID_OPERATION_ID,
    method: "PUT",
    path: "/api/v3/warehouses/{warehouseId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [
      { name: "warehouseId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePutApiV3WarehousesWarehouseIdResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executePutApiV3WarehousesWarehouseId(
  execute: WbOperationExecutor,
  input: PutApiV3WarehousesWarehouseIdInput,
  options: WbRequestOptions = {},
): Promise<PutApiV3WarehousesWarehouseIdResponse> {
  return execute(definition, input, options);
}
