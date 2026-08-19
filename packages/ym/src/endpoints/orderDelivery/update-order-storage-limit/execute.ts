// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateOrderStorageLimitResponse } from "./contract.js";
import type {
  UpdateOrderStorageLimitInput,
  UpdateOrderStorageLimitResponse,
} from "./types.js";

export const UPDATE_ORDER_STORAGE_LIMIT_OPERATION_ID =
  "updateOrderStorageLimit";

const definition: YmOperationDefinition<UpdateOrderStorageLimitResponse> = {
  operationId: UPDATE_ORDER_STORAGE_LIMIT_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/storage-limit",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateOrderStorageLimitResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateOrderStorageLimit(
  execute: YmOperationExecutor,
  input: UpdateOrderStorageLimitInput,
  options: YmRequestOptions = {},
): Promise<UpdateOrderStorageLimitResponse> {
  return execute(definition, input, options);
}
