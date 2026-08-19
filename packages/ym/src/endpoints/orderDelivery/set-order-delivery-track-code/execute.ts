// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSetOrderDeliveryTrackCodeResponse } from "./contract.js";
import type {
  SetOrderDeliveryTrackCodeInput,
  SetOrderDeliveryTrackCodeResponse,
} from "./types.js";

export const SET_ORDER_DELIVERY_TRACK_CODE_OPERATION_ID =
  "setOrderDeliveryTrackCode";

const definition: YmOperationDefinition<SetOrderDeliveryTrackCodeResponse> = {
  operationId: SET_ORDER_DELIVERY_TRACK_CODE_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/track",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSetOrderDeliveryTrackCodeResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSetOrderDeliveryTrackCode(
  execute: YmOperationExecutor,
  input: SetOrderDeliveryTrackCodeInput,
  options: YmRequestOptions = {},
): Promise<SetOrderDeliveryTrackCodeResponse> {
  return execute(definition, input, options);
}
