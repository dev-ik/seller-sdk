import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getFbsWarehouseOperationStatusResponseSchema } from "./contract.js";
import type {
  GetFbsWarehouseOperationStatusRequest,
  GetFbsWarehouseOperationStatusResponse,
} from "./types.js";

export const GET_WAREHOUSE_OPERATION_STATUS_OPERATION_ID =
  "GetWarehouseFBSOperationStatus";

export async function executeGetFbsWarehouseOperationStatus(
  transport: Transport,
  input: GetFbsWarehouseOperationStatusRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsWarehouseOperationStatusResponse> {
  const response = await transport.request({
    operationId: GET_WAREHOUSE_OPERATION_STATUS_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/operation/status",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbsWarehouseOperationStatusResponseSchema,
    response.body,
    GET_WAREHOUSE_OPERATION_STATUS_OPERATION_ID,
  );
}
