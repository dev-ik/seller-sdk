// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetSupplyRequestsResponse } from "./contract.js";
import type {
  GetSupplyRequestsInput,
  GetSupplyRequestsResponse,
} from "./types.js";

export const GET_SUPPLY_REQUESTS_OPERATION_ID = "getSupplyRequests";

const definition: YmOperationDefinition<GetSupplyRequestsResponse> = {
  operationId: GET_SUPPLY_REQUESTS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/supply-requests",
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
  parseResponse: parseGetSupplyRequestsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetSupplyRequests(
  execute: YmOperationExecutor,
  input: GetSupplyRequestsInput,
  options: YmRequestOptions = {},
): Promise<GetSupplyRequestsResponse> {
  return execute(definition, input, options);
}
