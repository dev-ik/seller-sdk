import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listWarehousesV1ResponseSchema } from "./contract.js";
import type {
  ListWarehousesV1Request,
  ListWarehousesV1Response,
} from "./types.js";

export const LIST_WAREHOUSES_V1_OPERATION_ID = "WarehouseAPI_WarehouseList";

/** @deprecated Ozon announced shutdown of this API version on 7 April 2026. */
export async function executeListWarehousesV1(
  transport: Transport,
  input: ListWarehousesV1Request,
  options: OzonRequestOptions = {},
): Promise<ListWarehousesV1Response> {
  const response = await transport.request({
    operationId: LIST_WAREHOUSES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listWarehousesV1ResponseSchema,
    response.body,
    LIST_WAREHOUSES_V1_OPERATION_ID,
  );
}
