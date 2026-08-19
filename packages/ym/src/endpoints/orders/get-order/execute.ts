// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOrderResponse } from "./contract.js";
import type { GetOrderInput, GetOrderResponse } from "./types.js";

export const GET_ORDER_OPERATION_ID = "getOrder";

const definition: YmOperationDefinition<GetOrderResponse> = {
  operationId: GET_ORDER_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOrderResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOrder(
  execute: YmOperationExecutor,
  input: GetOrderInput,
  options: YmRequestOptions = {},
): Promise<GetOrderResponse> {
  return execute(definition, input, options);
}
