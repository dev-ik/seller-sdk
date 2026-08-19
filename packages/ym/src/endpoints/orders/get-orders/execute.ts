// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOrdersResponse } from "./contract.js";
import type { GetOrdersInput, GetOrdersResponse } from "./types.js";

export const GET_ORDERS_OPERATION_ID = "getOrders";

const definition: YmOperationDefinition<GetOrdersResponse> = {
  operationId: GET_ORDERS_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/orders",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderIds", location: "query", required: false, array: true },
    { name: "status", location: "query", required: false, array: true },
    { name: "substatus", location: "query", required: false, array: true },
    { name: "fromDate", location: "query", required: false, array: false },
    { name: "toDate", location: "query", required: false, array: false },
    {
      name: "supplierShipmentDateFrom",
      location: "query",
      required: false,
      array: false,
    },
    {
      name: "supplierShipmentDateTo",
      location: "query",
      required: false,
      array: false,
    },
    { name: "updatedAtFrom", location: "query", required: false, array: false },
    { name: "updatedAtTo", location: "query", required: false, array: false },
    { name: "dispatchType", location: "query", required: false, array: false },
    { name: "fake", location: "query", required: false, array: false },
    { name: "hasCis", location: "query", required: false, array: false },
    {
      name: "onlyWaitingForCancellationApprove",
      location: "query",
      required: false,
      array: false,
    },
    {
      name: "onlyEstimatedDelivery",
      location: "query",
      required: false,
      array: false,
    },
    { name: "buyerType", location: "query", required: false, array: false },
    { name: "page", location: "query", required: false, array: false },
    { name: "pageSize", location: "query", required: false, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOrdersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOrders(
  execute: YmOperationExecutor,
  input: GetOrdersInput,
  options: YmRequestOptions = {},
): Promise<GetOrdersResponse> {
  return execute(definition, input, options);
}
