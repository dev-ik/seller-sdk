// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetReturnDeliveryOptionsResponse } from "./contract.js";
import type {
  GetReturnDeliveryOptionsInput,
  GetReturnDeliveryOptionsResponse,
} from "./types.js";

export const GET_RETURN_DELIVERY_OPTIONS_OPERATION_ID =
  "getReturnDeliveryOptions";

const definition: YmOperationDefinition<GetReturnDeliveryOptionsResponse> = {
  operationId: GET_RETURN_DELIVERY_OPTIONS_OPERATION_ID,
  method: "POST",
  path: "/v1/campaigns/{campaignId}/return-delivery-options",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetReturnDeliveryOptionsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetReturnDeliveryOptions(
  execute: YmOperationExecutor,
  input: GetReturnDeliveryOptionsInput,
  options: YmRequestOptions = {},
): Promise<GetReturnDeliveryOptionsResponse> {
  return execute(definition, input, options);
}
