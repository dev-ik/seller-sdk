// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetGoodsStatsResponse } from "./contract.js";
import type { GetGoodsStatsInput, GetGoodsStatsResponse } from "./types.js";

export const GET_GOODS_STATS_OPERATION_ID = "getGoodsStats";

const definition: YmOperationDefinition<GetGoodsStatsResponse> = {
  operationId: GET_GOODS_STATS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/stats/skus",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetGoodsStatsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetGoodsStats(
  execute: YmOperationExecutor,
  input: GetGoodsStatsInput,
  options: YmRequestOptions = {},
): Promise<GetGoodsStatsResponse> {
  return execute(definition, input, options);
}
