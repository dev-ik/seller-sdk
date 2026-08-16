import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listWarehousesV2ResponseSchema } from "./contract.js";
import type {
  ListWarehousesV2Request,
  ListWarehousesV2Response,
} from "./types.js";

export const LIST_WAREHOUSES_V2_OPERATION_ID = "WarehouseListV2";

export async function executeListWarehousesV2(
  transport: Transport,
  input: ListWarehousesV2Request,
  options: OzonRequestOptions = {},
): Promise<ListWarehousesV2Response> {
  const response = await transport.request({
    operationId: LIST_WAREHOUSES_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/warehouse/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listWarehousesV2ResponseSchema,
    response.body,
    LIST_WAREHOUSES_V2_OPERATION_ID,
  );
}
