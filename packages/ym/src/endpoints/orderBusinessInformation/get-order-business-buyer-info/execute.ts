// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOrderBusinessBuyerInfoResponse } from "./contract.js";
import type {
  GetOrderBusinessBuyerInfoInput,
  GetOrderBusinessBuyerInfoResponse,
} from "./types.js";

export const GET_ORDER_BUSINESS_BUYER_INFO_OPERATION_ID =
  "getOrderBusinessBuyerInfo";

const definition: YmOperationDefinition<GetOrderBusinessBuyerInfoResponse> = {
  operationId: GET_ORDER_BUSINESS_BUYER_INFO_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/business-buyer",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOrderBusinessBuyerInfoResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOrderBusinessBuyerInfo(
  execute: YmOperationExecutor,
  input: GetOrderBusinessBuyerInfoInput,
  options: YmRequestOptions = {},
): Promise<GetOrderBusinessBuyerInfoResponse> {
  return execute(definition, input, options);
}
