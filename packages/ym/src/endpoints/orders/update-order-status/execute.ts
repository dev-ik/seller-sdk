// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateOrderStatusResponse } from "./contract.js";
import type {
  UpdateOrderStatusInput,
  UpdateOrderStatusResponse,
} from "./types.js";

export const UPDATE_ORDER_STATUS_OPERATION_ID = "updateOrderStatus";

const definition: YmOperationDefinition<UpdateOrderStatusResponse> = {
  operationId: UPDATE_ORDER_STATUS_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/status",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateOrderStatusResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateOrderStatus(
  execute: YmOperationExecutor,
  input: UpdateOrderStatusInput,
  options: YmRequestOptions = {},
): Promise<UpdateOrderStatusResponse> {
  return execute(definition, input, options);
}
