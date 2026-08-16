import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { updateErfbsWarehouseV1ResponseSchema } from "./contract.js";
import type {
  UpdateErfbsWarehouseV1Request,
  UpdateErfbsWarehouseV1Response,
} from "./types.js";

export const UPDATE_ERFBS_WAREHOUSE_V1_OPERATION_ID = "WarehouseERFBSUpdate";

export async function executeUpdateErfbsWarehouseV1(
  transport: Transport,
  input: UpdateErfbsWarehouseV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateErfbsWarehouseV1Response> {
  const response = await transport.request({
    operationId: UPDATE_ERFBS_WAREHOUSE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/erfbs/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    updateErfbsWarehouseV1ResponseSchema,
    response.body,
    UPDATE_ERFBS_WAREHOUSE_V1_OPERATION_ID,
  );
}
