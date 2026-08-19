// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseProvideOrderDigitalCodesResponse } from "./contract.js";
import type {
  ProvideOrderDigitalCodesInput,
  ProvideOrderDigitalCodesResponse,
} from "./types.js";

export const PROVIDE_ORDER_DIGITAL_CODES_OPERATION_ID =
  "provideOrderDigitalCodes";

const definition: YmOperationDefinition<ProvideOrderDigitalCodesResponse> = {
  operationId: PROVIDE_ORDER_DIGITAL_CODES_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/deliverDigitalGoods",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseProvideOrderDigitalCodesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeProvideOrderDigitalCodes(
  execute: YmOperationExecutor,
  input: ProvideOrderDigitalCodesInput,
  options: YmRequestOptions = {},
): Promise<ProvideOrderDigitalCodesResponse> {
  return execute(definition, input, options);
}
