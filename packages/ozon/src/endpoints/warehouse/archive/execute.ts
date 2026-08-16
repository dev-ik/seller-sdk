import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { warehouseOperationResponseSchema } from "../operation/shared/contract.js";
import type {
  ArchiveFbsWarehouseRequest,
  ArchiveFbsWarehouseResponse,
} from "./types.js";

export const ARCHIVE_WAREHOUSE_OPERATION_ID = "ArchiveWarehouseFBS";

export async function executeArchiveFbsWarehouse(
  transport: Transport,
  input: ArchiveFbsWarehouseRequest,
  options: OzonRequestOptions = {},
): Promise<ArchiveFbsWarehouseResponse> {
  const response = await transport.request({
    operationId: ARCHIVE_WAREHOUSE_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/archive",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    warehouseOperationResponseSchema,
    response.body,
    ARCHIVE_WAREHOUSE_OPERATION_ID,
  );
}
