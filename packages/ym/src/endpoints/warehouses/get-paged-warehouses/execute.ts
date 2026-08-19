// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetPagedWarehousesResponse } from "./contract.js";
import type {
  GetPagedWarehousesInput,
  GetPagedWarehousesResponse,
} from "./types.js";

export const GET_PAGED_WAREHOUSES_OPERATION_ID = "getPagedWarehouses";

const definition: YmOperationDefinition<GetPagedWarehousesResponse> = {
  operationId: GET_PAGED_WAREHOUSES_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/warehouses",
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
  parseResponse: parseGetPagedWarehousesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetPagedWarehouses(
  execute: YmOperationExecutor,
  input: GetPagedWarehousesInput,
  options: YmRequestOptions = {},
): Promise<GetPagedWarehousesResponse> {
  return execute(definition, input, options);
}
