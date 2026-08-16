import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listFbpWarehousesV1ResponseSchema } from "./contract.js";
import type { ListFbpWarehousesV1Response } from "./types.js";

export const LIST_FBP_WAREHOUSES_V1_OPERATION_ID = "FbpWarehouseList";

export async function executeListFbpWarehousesV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListFbpWarehousesV1Response> {
  const response = await transport.request({
    operationId: LIST_FBP_WAREHOUSES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/warehouse/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbpWarehousesV1ResponseSchema,
    response.body,
    LIST_FBP_WAREHOUSES_V1_OPERATION_ID,
  );
}
