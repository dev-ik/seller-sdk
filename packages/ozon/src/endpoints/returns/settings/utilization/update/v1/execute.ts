import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  UpdateUtilizationSettingsV1Request,
  UpdateUtilizationSettingsV1Response,
} from "./types.js";
export const UPDATE_UTILIZATION_SETTINGS_V1_OPERATION_ID = "UtilizationUpdate";
export async function executeUpdateUtilizationSettingsV1(
  transport: Transport,
  input: UpdateUtilizationSettingsV1Request,
  options: OzonRequestOptions = {},
): Promise<UpdateUtilizationSettingsV1Response> {
  await transport.request({
    operationId: UPDATE_UTILIZATION_SETTINGS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/returns/settings/utilization/update",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
}
