import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { updateFbsWarehouseFirstMileV1ResponseSchema } from "./contract.js";
import type {
  UpdateFbsWarehouseFirstMileV1Request,
  UpdateFbsWarehouseFirstMileV1Response,
} from "./types.js";

export const UPDATE_FBS_WAREHOUSE_FIRST_MILE_V1_OPERATION_ID =
  "UpdateWarehouseFBSFirstMile";

export async function executeUpdateFbsWarehouseFirstMileV1(
  transport: Transport,
  input: UpdateFbsWarehouseFirstMileV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateFbsWarehouseFirstMileV1Response> {
  const response = await transport.request({
    operationId: UPDATE_FBS_WAREHOUSE_FIRST_MILE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/first-mile/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updateFbsWarehouseFirstMileV1ResponseSchema,
    response.body,
    UPDATE_FBS_WAREHOUSE_FIRST_MILE_V1_OPERATION_ID,
  );
}
