// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetWarehousesResponse } from "./contract.js";
import type { GetWarehousesInput, GetWarehousesResponse } from "./types.js";

export const GET_WAREHOUSES_OPERATION_ID = "getWarehouses";

const definition: YmOperationDefinition<GetWarehousesResponse> = {
  operationId: GET_WAREHOUSES_OPERATION_ID,
  method: "GET",
  path: "/v2/businesses/{businessId}/warehouses",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetWarehousesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetWarehouses(
  execute: YmOperationExecutor,
  input: GetWarehousesInput,
  options: YmRequestOptions = {},
): Promise<GetWarehousesResponse> {
  return execute(definition, input, options);
}
