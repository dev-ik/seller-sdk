import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listOzonWarehousesResponseSchema } from "./contract.js";
import type {
  ListOzonWarehousesRequest,
  ListOzonWarehousesResponse,
} from "./types.js";

export const LIST_OZON_WAREHOUSES_OPERATION_ID = "WarehouseOZONList";

/** @internal */
export async function executeListOzonWarehouses(
  transport: Transport,
  input: ListOzonWarehousesRequest,
  options: OzonRequestOptions = {},
): Promise<ListOzonWarehousesResponse> {
  const response = await transport.request({
    operationId: LIST_OZON_WAREHOUSES_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/ozon/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listOzonWarehousesResponseSchema,
    response.body,
    LIST_OZON_WAREHOUSES_OPERATION_ID,
  );
}
