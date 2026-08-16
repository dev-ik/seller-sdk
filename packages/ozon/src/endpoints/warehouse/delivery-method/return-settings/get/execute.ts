import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getDeliveryMethodReturnSettingsResponseSchema } from "./contract.js";
import type {
  GetDeliveryMethodReturnSettingsRequest,
  GetDeliveryMethodReturnSettingsResponse,
} from "./types.js";

export const GET_DELIVERY_METHOD_RETURN_SETTINGS_OPERATION_ID =
  "GetDeliveryMethodReturnSettingsV1";

export async function executeGetDeliveryMethodReturnSettings(
  transport: Transport,
  input: GetDeliveryMethodReturnSettingsRequest,
  options: OzonRequestOptions = {},
): Promise<GetDeliveryMethodReturnSettingsResponse> {
  const response = await transport.request({
    operationId: GET_DELIVERY_METHOD_RETURN_SETTINGS_OPERATION_ID,
    method: "POST",
    path: "/v1/delivery-method/return/settings/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getDeliveryMethodReturnSettingsResponseSchema,
    response.body,
    GET_DELIVERY_METHOD_RETURN_SETTINGS_OPERATION_ID,
  );
}
