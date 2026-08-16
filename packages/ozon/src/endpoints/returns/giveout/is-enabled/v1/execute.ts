import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { isGiveoutEnabledV1ResponseSchema } from "./contract.js";
import type { IsGiveoutEnabledV1Response } from "./types.js";
export const IS_GIVEOUT_ENABLED_V1_OPERATION_ID = "ReturnAPI_GiveoutIsEnabled";
export async function executeIsGiveoutEnabledV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<IsGiveoutEnabledV1Response> {
  const response = await transport.request({
    operationId: IS_GIVEOUT_ENABLED_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/return/giveout/is-enabled",
    body: {},
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    isGiveoutEnabledV1ResponseSchema,
    response.body,
    IS_GIVEOUT_ENABLED_V1_OPERATION_ID,
  );
}
