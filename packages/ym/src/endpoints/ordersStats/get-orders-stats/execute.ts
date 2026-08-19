// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOrdersStatsResponse } from "./contract.js";
import type { GetOrdersStatsInput, GetOrdersStatsResponse } from "./types.js";

export const GET_ORDERS_STATS_OPERATION_ID = "getOrdersStats";

const definition: YmOperationDefinition<GetOrdersStatsResponse> = {
  operationId: GET_ORDERS_STATS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/stats/orders",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOrdersStatsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOrdersStats(
  execute: YmOperationExecutor,
  input: GetOrdersStatsInput,
  options: YmRequestOptions = {},
): Promise<GetOrdersStatsResponse> {
  return execute(definition, input, options);
}
