// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetDeliveryOptionsResponse } from "./contract.js";
import type {
  GetDeliveryOptionsInput,
  GetDeliveryOptionsResponse,
} from "./types.js";

export const GET_DELIVERY_OPTIONS_OPERATION_ID = "getDeliveryOptions";

const definition: YmOperationDefinition<GetDeliveryOptionsResponse> = {
  operationId: GET_DELIVERY_OPTIONS_OPERATION_ID,
  method: "POST",
  path: "/v1/campaigns/{campaignId}/delivery-options",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetDeliveryOptionsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetDeliveryOptions(
  execute: YmOperationExecutor,
  input: GetDeliveryOptionsInput,
  options: YmRequestOptions = {},
): Promise<GetDeliveryOptionsResponse> {
  return execute(definition, input, options);
}
