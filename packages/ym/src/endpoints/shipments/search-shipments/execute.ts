// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSearchShipmentsResponse } from "./contract.js";
import type { SearchShipmentsInput, SearchShipmentsResponse } from "./types.js";

export const SEARCH_SHIPMENTS_OPERATION_ID = "searchShipments";

const definition: YmOperationDefinition<SearchShipmentsResponse> = {
  operationId: SEARCH_SHIPMENTS_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/first-mile/shipments",
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
  parseResponse: parseSearchShipmentsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSearchShipments(
  execute: YmOperationExecutor,
  input: SearchShipmentsInput,
  options: YmRequestOptions = {},
): Promise<SearchShipmentsResponse> {
  return execute(definition, input, options);
}
