// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetSupplyRequestItemsResponse } from "./contract.js";
import type {
  GetSupplyRequestItemsInput,
  GetSupplyRequestItemsResponse,
} from "./types.js";

export const GET_SUPPLY_REQUEST_ITEMS_OPERATION_ID = "getSupplyRequestItems";

const definition: YmOperationDefinition<GetSupplyRequestItemsResponse> = {
  operationId: GET_SUPPLY_REQUEST_ITEMS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/supply-requests/items",
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
  parseResponse: parseGetSupplyRequestItemsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetSupplyRequestItems(
  execute: YmOperationExecutor,
  input: GetSupplyRequestItemsInput,
  options: YmRequestOptions = {},
): Promise<GetSupplyRequestItemsResponse> {
  return execute(definition, input, options);
}
