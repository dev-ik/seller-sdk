// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateOrderItemsResponse } from "./contract.js";
import type {
  UpdateOrderItemsInput,
  UpdateOrderItemsResponse,
} from "./types.js";

export const UPDATE_ORDER_ITEMS_OPERATION_ID = "updateOrderItems";

const definition: YmOperationDefinition<UpdateOrderItemsResponse> = {
  operationId: UPDATE_ORDER_ITEMS_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/items",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateOrderItemsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateOrderItems(
  execute: YmOperationExecutor,
  input: UpdateOrderItemsInput,
  options: YmRequestOptions = {},
): Promise<UpdateOrderItemsResponse> {
  return execute(definition, input, options);
}
