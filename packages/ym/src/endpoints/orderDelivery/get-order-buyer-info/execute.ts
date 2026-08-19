// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOrderBuyerInfoResponse } from "./contract.js";
import type {
  GetOrderBuyerInfoInput,
  GetOrderBuyerInfoResponse,
} from "./types.js";

export const GET_ORDER_BUYER_INFO_OPERATION_ID = "getOrderBuyerInfo";

const definition: YmOperationDefinition<GetOrderBuyerInfoResponse> = {
  operationId: GET_ORDER_BUYER_INFO_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/buyer",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOrderBuyerInfoResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOrderBuyerInfo(
  execute: YmOperationExecutor,
  input: GetOrderBuyerInfoInput,
  options: YmRequestOptions = {},
): Promise<GetOrderBuyerInfoResponse> {
  return execute(definition, input, options);
}
