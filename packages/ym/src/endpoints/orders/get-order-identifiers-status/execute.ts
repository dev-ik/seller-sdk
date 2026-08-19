// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOrderIdentifiersStatusResponse } from "./contract.js";
import type {
  GetOrderIdentifiersStatusInput,
  GetOrderIdentifiersStatusResponse,
} from "./types.js";

export const GET_ORDER_IDENTIFIERS_STATUS_OPERATION_ID =
  "getOrderIdentifiersStatus";

const definition: YmOperationDefinition<GetOrderIdentifiersStatusResponse> = {
  operationId: GET_ORDER_IDENTIFIERS_STATUS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/identifiers/status",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOrderIdentifiersStatusResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOrderIdentifiersStatus(
  execute: YmOperationExecutor,
  input: GetOrderIdentifiersStatusInput,
  options: YmRequestOptions = {},
): Promise<GetOrderIdentifiersStatusResponse> {
  return execute(definition, input, options);
}
