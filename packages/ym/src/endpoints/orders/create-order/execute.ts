// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseCreateOrderResponse } from "./contract.js";
import type { CreateOrderInput, CreateOrderResponse } from "./types.js";

export const CREATE_ORDER_OPERATION_ID = "createOrder";

const definition: YmOperationDefinition<CreateOrderResponse> = {
  operationId: CREATE_ORDER_OPERATION_ID,
  method: "POST",
  path: "/v1/campaigns/{campaignId}/orders/create",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseCreateOrderResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeCreateOrder(
  execute: YmOperationExecutor,
  input: CreateOrderInput,
  options: YmRequestOptions = {},
): Promise<CreateOrderResponse> {
  return execute(definition, input, options);
}
