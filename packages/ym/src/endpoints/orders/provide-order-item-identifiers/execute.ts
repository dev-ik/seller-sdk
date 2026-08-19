// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseProvideOrderItemIdentifiersResponse } from "./contract.js";
import type {
  ProvideOrderItemIdentifiersInput,
  ProvideOrderItemIdentifiersResponse,
} from "./types.js";

export const PROVIDE_ORDER_ITEM_IDENTIFIERS_OPERATION_ID =
  "provideOrderItemIdentifiers";

const definition: YmOperationDefinition<ProvideOrderItemIdentifiersResponse> = {
  operationId: PROVIDE_ORDER_ITEM_IDENTIFIERS_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/identifiers",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseProvideOrderItemIdentifiersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeProvideOrderItemIdentifiers(
  execute: YmOperationExecutor,
  input: ProvideOrderItemIdentifiersInput,
  options: YmRequestOptions = {},
): Promise<ProvideOrderItemIdentifiersResponse> {
  return execute(definition, input, options);
}
