// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOutletsResponse } from "./contract.js";
import type { GetOutletsInput, GetOutletsResponse } from "./types.js";

export const GET_OUTLETS_OPERATION_ID = "getOutlets";

const definition: YmOperationDefinition<GetOutletsResponse> = {
  operationId: GET_OUTLETS_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/outlets",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "region_id", location: "query", required: false, array: false },
    {
      name: "shop_outlet_code",
      location: "query",
      required: false,
      array: false,
    },
    { name: "regionId", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOutletsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOutlets(
  execute: YmOperationExecutor,
  input: GetOutletsInput,
  options: YmRequestOptions = {},
): Promise<GetOutletsResponse> {
  return execute(definition, input, options);
}
