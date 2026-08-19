// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateOrderResponse } from "./contract.js";
import type { UpdateOrderInput, UpdateOrderResponse } from "./types.js";

export const UPDATE_ORDER_OPERATION_ID = "updateOrder";

const definition: YmOperationDefinition<UpdateOrderResponse> = {
  operationId: UPDATE_ORDER_OPERATION_ID,
  method: "POST",
  path: "/v1/campaigns/{campaignId}/orders/update",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateOrderResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateOrder(
  execute: YmOperationExecutor,
  input: UpdateOrderInput,
  options: YmRequestOptions = {},
): Promise<UpdateOrderResponse> {
  return execute(definition, input, options);
}
