// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateOrderStatusesResponse } from "./contract.js";
import type {
  UpdateOrderStatusesInput,
  UpdateOrderStatusesResponse,
} from "./types.js";

export const UPDATE_ORDER_STATUSES_OPERATION_ID = "updateOrderStatuses";

const definition: YmOperationDefinition<UpdateOrderStatusesResponse> = {
  operationId: UPDATE_ORDER_STATUSES_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/orders/status-update",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateOrderStatusesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateOrderStatuses(
  execute: YmOperationExecutor,
  input: UpdateOrderStatusesInput,
  options: YmRequestOptions = {},
): Promise<UpdateOrderStatusesResponse> {
  return execute(definition, input, options);
}
