// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutApiV3DbwWarehousesWarehouseIdContactsResponse } from "./contract.js";
import type {
  PutApiV3DbwWarehousesWarehouseIdContactsInput,
  PutApiV3DbwWarehousesWarehouseIdContactsResponse,
} from "./types.js";

export const PUT_API_V3_DBW_WAREHOUSES_WAREHOUSE_ID_CONTACTS_OPERATION_ID =
  "PUT /api/v3/dbw/warehouses/{warehouseId}/contacts";

const definition: WbOperationDefinition<PutApiV3DbwWarehousesWarehouseIdContactsResponse> =
  {
    operationId: PUT_API_V3_DBW_WAREHOUSES_WAREHOUSE_ID_CONTACTS_OPERATION_ID,
    method: "PUT",
    path: "/api/v3/dbw/warehouses/{warehouseId}/contacts",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [
      { name: "warehouseId", location: "path", required: true, array: false },
    ],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePutApiV3DbwWarehousesWarehouseIdContactsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executePutApiV3DbwWarehousesWarehouseIdContacts(
  execute: WbOperationExecutor,
  input: PutApiV3DbwWarehousesWarehouseIdContactsInput,
  options: WbRequestOptions = {},
): Promise<PutApiV3DbwWarehousesWarehouseIdContactsResponse> {
  return execute(definition, input, options);
}
