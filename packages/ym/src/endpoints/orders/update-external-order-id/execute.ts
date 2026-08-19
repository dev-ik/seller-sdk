// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateExternalOrderIdResponse } from "./contract.js";
import type {
  UpdateExternalOrderIdInput,
  UpdateExternalOrderIdResponse,
} from "./types.js";

export const UPDATE_EXTERNAL_ORDER_ID_OPERATION_ID = "updateExternalOrderId";

const definition: YmOperationDefinition<UpdateExternalOrderIdResponse> = {
  operationId: UPDATE_EXTERNAL_ORDER_ID_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/external-id",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateExternalOrderIdResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateExternalOrderId(
  execute: YmOperationExecutor,
  input: UpdateExternalOrderIdInput,
  options: YmRequestOptions = {},
): Promise<UpdateExternalOrderIdResponse> {
  return execute(definition, input, options);
}
