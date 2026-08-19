// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSetOrderDeliveryDateResponse } from "./contract.js";
import type {
  SetOrderDeliveryDateInput,
  SetOrderDeliveryDateResponse,
} from "./types.js";

export const SET_ORDER_DELIVERY_DATE_OPERATION_ID = "setOrderDeliveryDate";

const definition: YmOperationDefinition<SetOrderDeliveryDateResponse> = {
  operationId: SET_ORDER_DELIVERY_DATE_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/date",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSetOrderDeliveryDateResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSetOrderDeliveryDate(
  execute: YmOperationExecutor,
  input: SetOrderDeliveryDateInput,
  options: YmRequestOptions = {},
): Promise<SetOrderDeliveryDateResponse> {
  return execute(definition, input, options);
}
