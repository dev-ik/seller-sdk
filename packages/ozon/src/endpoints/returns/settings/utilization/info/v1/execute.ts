import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getUtilizationSettingsV1ResponseSchema } from "./contract.js";
import type { GetUtilizationSettingsV1Response } from "./types.js";
export const GET_UTILIZATION_SETTINGS_V1_OPERATION_ID = "UtilizationInfo";
export async function executeGetUtilizationSettingsV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetUtilizationSettingsV1Response> {
  const response = await transport.request({
    operationId: GET_UTILIZATION_SETTINGS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/returns/settings/utilization/info",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getUtilizationSettingsV1ResponseSchema,
    response.body,
    GET_UTILIZATION_SETTINGS_V1_OPERATION_ID,
  );
}
