// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiV3DbwWarehousesWarehouseIdContactsResponse } from "./contract.js";
import type {
  GetApiV3DbwWarehousesWarehouseIdContactsInput,
  GetApiV3DbwWarehousesWarehouseIdContactsResponse,
} from "./types.js";

export const GET_API_V3_DBW_WAREHOUSES_WAREHOUSE_ID_CONTACTS_OPERATION_ID =
  "GET /api/v3/dbw/warehouses/{warehouseId}/contacts";

const definition: WbOperationDefinition<GetApiV3DbwWarehousesWarehouseIdContactsResponse> =
  {
    operationId: GET_API_V3_DBW_WAREHOUSES_WAREHOUSE_ID_CONTACTS_OPERATION_ID,
    method: "GET",
    path: "/api/v3/dbw/warehouses/{warehouseId}/contacts",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [
      { name: "warehouseId", location: "path", required: true, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetApiV3DbwWarehousesWarehouseIdContactsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executeGetApiV3DbwWarehousesWarehouseIdContacts(
  execute: WbOperationExecutor,
  input: GetApiV3DbwWarehousesWarehouseIdContactsInput,
  options: WbRequestOptions = {},
): Promise<GetApiV3DbwWarehousesWarehouseIdContactsResponse> {
  return execute(definition, input, options);
}
