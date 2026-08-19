// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetReturnsResponse } from "./contract.js";
import type { GetReturnsInput, GetReturnsResponse } from "./types.js";

export const GET_RETURNS_OPERATION_ID = "getReturns";

const definition: YmOperationDefinition<GetReturnsResponse> = {
  operationId: GET_RETURNS_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/returns",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "orderIds", location: "query", required: false, array: true },
    { name: "statuses", location: "query", required: false, array: true },
    {
      name: "shipmentStatuses",
      location: "query",
      required: false,
      array: true,
    },
    { name: "type", location: "query", required: false, array: false },
    { name: "fromDate", location: "query", required: false, array: false },
    { name: "toDate", location: "query", required: false, array: false },
    { name: "from_date", location: "query", required: false, array: false },
    { name: "to_date", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetReturnsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetReturns(
  execute: YmOperationExecutor,
  input: GetReturnsInput,
  options: YmRequestOptions = {},
): Promise<GetReturnsResponse> {
  return execute(definition, input, options);
}
