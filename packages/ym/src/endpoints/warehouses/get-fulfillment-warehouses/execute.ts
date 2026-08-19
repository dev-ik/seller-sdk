// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetFulfillmentWarehousesResponse } from "./contract.js";
import type {
  GetFulfillmentWarehousesInput,
  GetFulfillmentWarehousesResponse,
} from "./types.js";

export const GET_FULFILLMENT_WAREHOUSES_OPERATION_ID =
  "getFulfillmentWarehouses";

const definition: YmOperationDefinition<GetFulfillmentWarehousesResponse> = {
  operationId: GET_FULFILLMENT_WAREHOUSES_OPERATION_ID,
  method: "GET",
  path: "/v2/warehouses",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetFulfillmentWarehousesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetFulfillmentWarehouses(
  execute: YmOperationExecutor,
  input?: GetFulfillmentWarehousesInput,
  options: YmRequestOptions = {},
): Promise<GetFulfillmentWarehousesResponse> {
  return execute(definition, input ?? {}, options);
}
