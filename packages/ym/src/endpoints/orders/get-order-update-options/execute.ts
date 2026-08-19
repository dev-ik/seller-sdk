// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOrderUpdateOptionsResponse } from "./contract.js";
import type {
  GetOrderUpdateOptionsInput,
  GetOrderUpdateOptionsResponse,
} from "./types.js";

export const GET_ORDER_UPDATE_OPTIONS_OPERATION_ID = "getOrderUpdateOptions";

const definition: YmOperationDefinition<GetOrderUpdateOptionsResponse> = {
  operationId: GET_ORDER_UPDATE_OPTIONS_OPERATION_ID,
  method: "POST",
  path: "/v1/campaigns/{campaignId}/orders/update-options",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOrderUpdateOptionsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOrderUpdateOptions(
  execute: YmOperationExecutor,
  input: GetOrderUpdateOptionsInput,
  options: YmRequestOptions = {},
): Promise<GetOrderUpdateOptionsResponse> {
  return execute(definition, input, options);
}
