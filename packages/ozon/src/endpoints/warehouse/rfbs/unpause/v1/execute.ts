import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { unpauseRfbsWarehouseV1ResponseSchema } from "./contract.js";
import type {
  UnpauseRfbsWarehouseV1Request,
  UnpauseRfbsWarehouseV1Response,
} from "./types.js";

export const UNPAUSE_RFBS_WAREHOUSE_V1_OPERATION_ID = "WarehouseRfbsUnpause";

export async function executeUnpauseRfbsWarehouseV1(
  transport: Transport,
  input: UnpauseRfbsWarehouseV1Request,
  options: OzonRequestOptions = {},
): Promise<UnpauseRfbsWarehouseV1Response> {
  const response = await transport.request({
    operationId: UNPAUSE_RFBS_WAREHOUSE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/rfbs/unpause",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    unpauseRfbsWarehouseV1ResponseSchema,
    response.body,
    UNPAUSE_RFBS_WAREHOUSE_V1_OPERATION_ID,
  );
}
