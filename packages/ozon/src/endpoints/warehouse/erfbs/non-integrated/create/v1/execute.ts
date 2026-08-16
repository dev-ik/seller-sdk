import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createErfbsNonIntegratedWarehouseV1ResponseSchema } from "./contract.js";
import type {
  CreateErfbsNonIntegratedWarehouseV1Request,
  CreateErfbsNonIntegratedWarehouseV1Response,
} from "./types.js";

export const CREATE_ERFBS_NON_INTEGRATED_WAREHOUSE_V1_OPERATION_ID =
  "WarehouseERFBSNonIntegratedCreate";

export async function executeCreateErfbsNonIntegratedWarehouseV1(
  transport: Transport,
  input: CreateErfbsNonIntegratedWarehouseV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateErfbsNonIntegratedWarehouseV1Response> {
  const response = await transport.request({
    operationId: CREATE_ERFBS_NON_INTEGRATED_WAREHOUSE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/erfbs/non-integrated/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createErfbsNonIntegratedWarehouseV1ResponseSchema,
    response.body,
    CREATE_ERFBS_NON_INTEGRATED_WAREHOUSE_V1_OPERATION_ID,
  );
}
