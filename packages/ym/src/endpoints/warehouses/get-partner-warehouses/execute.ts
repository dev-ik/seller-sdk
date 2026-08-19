// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetPartnerWarehousesResponse } from "./contract.js";
import type {
  GetPartnerWarehousesInput,
  GetPartnerWarehousesResponse,
} from "./types.js";

export const GET_PARTNER_WAREHOUSES_OPERATION_ID = "getPartnerWarehouses";

const definition: YmOperationDefinition<GetPartnerWarehousesResponse> = {
  operationId: GET_PARTNER_WAREHOUSES_OPERATION_ID,
  method: "POST",
  path: "/v3/businesses/{businessId}/warehouses",
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
  parseResponse: parseGetPartnerWarehousesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetPartnerWarehouses(
  execute: YmOperationExecutor,
  input: GetPartnerWarehousesInput,
  options: YmRequestOptions = {},
): Promise<GetPartnerWarehousesResponse> {
  return execute(definition, input, options);
}
