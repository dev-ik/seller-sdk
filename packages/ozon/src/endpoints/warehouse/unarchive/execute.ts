import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { warehouseOperationResponseSchema } from "../operation/shared/contract.js";
import type {
  UnarchiveFbsWarehouseRequest,
  UnarchiveFbsWarehouseResponse,
} from "./types.js";

export const UNARCHIVE_WAREHOUSE_OPERATION_ID = "UnarchiveWarehouseFBS";

export async function executeUnarchiveFbsWarehouse(
  transport: Transport,
  input: UnarchiveFbsWarehouseRequest,
  options: OzonRequestOptions = {},
): Promise<UnarchiveFbsWarehouseResponse> {
  const response = await transport.request({
    operationId: UNARCHIVE_WAREHOUSE_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/unarchive",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    warehouseOperationResponseSchema,
    response.body,
    UNARCHIVE_WAREHOUSE_OPERATION_ID,
  );
}
