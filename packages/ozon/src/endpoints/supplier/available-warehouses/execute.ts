import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listSupplierAvailableWarehousesResponseSchema } from "./contract.js";
import type { ListSupplierAvailableWarehousesResponse } from "./types.js";

export const LIST_SUPPLIER_AVAILABLE_WAREHOUSES_OPERATION_ID =
  "SupplierAPI_SupplierAvailableWarehouses";

export async function executeListSupplierAvailableWarehouses(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListSupplierAvailableWarehousesResponse> {
  const response = await transport.request({
    operationId: LIST_SUPPLIER_AVAILABLE_WAREHOUSES_OPERATION_ID,
    method: "GET",
    path: "/v1/supplier/available_warehouses",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listSupplierAvailableWarehousesResponseSchema,
    response.body,
    LIST_SUPPLIER_AVAILABLE_WAREHOUSES_OPERATION_ID,
  );
}
