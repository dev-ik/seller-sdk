import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createFbsWarehouseV1ResponseSchema } from "./contract.js";
import type {
  CreateFbsWarehouseV1Request,
  CreateFbsWarehouseV1Response,
} from "./types.js";

export const CREATE_FBS_WAREHOUSE_V1_OPERATION_ID =
  "WarehouseAPI_CreateWarehouseFBS";

export async function executeCreateFbsWarehouseV1(
  transport: Transport,
  input: CreateFbsWarehouseV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbsWarehouseV1Response> {
  const response = await transport.request({
    operationId: CREATE_FBS_WAREHOUSE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/fbs/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createFbsWarehouseV1ResponseSchema,
    response.body,
    CREATE_FBS_WAREHOUSE_V1_OPERATION_ID,
  );
}
