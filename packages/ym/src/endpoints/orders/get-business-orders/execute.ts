// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetBusinessOrdersResponse } from "./contract.js";
import type {
  GetBusinessOrdersInput,
  GetBusinessOrdersResponse,
} from "./types.js";

export const GET_BUSINESS_ORDERS_OPERATION_ID = "getBusinessOrders";

const definition: YmOperationDefinition<GetBusinessOrdersResponse> = {
  operationId: GET_BUSINESS_ORDERS_OPERATION_ID,
  method: "POST",
  path: "/v1/businesses/{businessId}/orders",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetBusinessOrdersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetBusinessOrders(
  execute: YmOperationExecutor,
  input: GetBusinessOrdersInput,
  options: YmRequestOptions = {},
): Promise<GetBusinessOrdersResponse> {
  return execute(definition, input, options);
}
