// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseAcceptOrderCancellationResponse } from "./contract.js";
import type {
  AcceptOrderCancellationInput,
  AcceptOrderCancellationResponse,
} from "./types.js";

export const ACCEPT_ORDER_CANCELLATION_OPERATION_ID = "acceptOrderCancellation";

const definition: YmOperationDefinition<AcceptOrderCancellationResponse> = {
  operationId: ACCEPT_ORDER_CANCELLATION_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseAcceptOrderCancellationResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeAcceptOrderCancellation(
  execute: YmOperationExecutor,
  input: AcceptOrderCancellationInput,
  options: YmRequestOptions = {},
): Promise<AcceptOrderCancellationResponse> {
  return execute(definition, input, options);
}
