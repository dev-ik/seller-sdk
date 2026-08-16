import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { pauseRfbsWarehouseV1ResponseSchema } from "./contract.js";
import type {
  PauseRfbsWarehouseV1Request,
  PauseRfbsWarehouseV1Response,
} from "./types.js";

export const PAUSE_RFBS_WAREHOUSE_V1_OPERATION_ID = "WarehouseRfbsPause";

export async function executePauseRfbsWarehouseV1(
  transport: Transport,
  input: PauseRfbsWarehouseV1Request,
  options: OzonRequestOptions = {},
): Promise<PauseRfbsWarehouseV1Response> {
  const response = await transport.request({
    operationId: PAUSE_RFBS_WAREHOUSE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/warehouse/rfbs/pause",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    pauseRfbsWarehouseV1ResponseSchema,
    response.body,
    PAUSE_RFBS_WAREHOUSE_V1_OPERATION_ID,
  );
}
