// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOrderBusinessDocumentsInfoResponse } from "./contract.js";
import type {
  GetOrderBusinessDocumentsInfoInput,
  GetOrderBusinessDocumentsInfoResponse,
} from "./types.js";

export const GET_ORDER_BUSINESS_DOCUMENTS_INFO_OPERATION_ID =
  "getOrderBusinessDocumentsInfo";

const definition: YmOperationDefinition<GetOrderBusinessDocumentsInfoResponse> =
  {
    operationId: GET_ORDER_BUSINESS_DOCUMENTS_INFO_OPERATION_ID,
    method: "POST",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/documents",
    productionOrigin: "https://api.partner.market.yandex.ru",
    parameters: [
      { name: "campaignId", location: "path", required: true, array: false },
      { name: "orderId", location: "path", required: true, array: false },
    ],
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetOrderBusinessDocumentsInfoResponse,
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  };

export function executeGetOrderBusinessDocumentsInfo(
  execute: YmOperationExecutor,
  input: GetOrderBusinessDocumentsInfoInput,
  options: YmRequestOptions = {},
): Promise<GetOrderBusinessDocumentsInfoResponse> {
  return execute(definition, input, options);
}
