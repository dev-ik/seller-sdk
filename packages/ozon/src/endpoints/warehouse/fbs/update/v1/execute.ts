import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { updateFbsWarehouseV1ResponseSchema } from "./contract.js";
import type {
  UpdateFbsWarehouseV1Request,
  UpdateFbsWarehouseV1Response,
} from "./types.js";

export const UPDATE_FBS_WAREHOUSE_V1_OPERATION_ID = "UpdateWarehouseFBS";

export async function executeUpdateFbsWarehouseV1(
  transport: Transport,
  input: UpdateFbsWarehouseV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateFbsWarehouseV1Response> {
  const response = await transport.request({
    operationId: UPDATE_FBS_WAREHOUSE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updateFbsWarehouseV1ResponseSchema,
    response.body,
    UPDATE_FBS_WAREHOUSE_V1_OPERATION_ID,
  );
}
