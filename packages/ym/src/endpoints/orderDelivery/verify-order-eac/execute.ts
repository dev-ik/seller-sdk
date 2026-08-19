// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseVerifyOrderEacResponse } from "./contract.js";
import type { VerifyOrderEacInput, VerifyOrderEacResponse } from "./types.js";

export const VERIFY_ORDER_EAC_OPERATION_ID = "verifyOrderEac";

const definition: YmOperationDefinition<VerifyOrderEacResponse> = {
  operationId: VERIFY_ORDER_EAC_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/verifyEac",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseVerifyOrderEacResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeVerifyOrderEac(
  execute: YmOperationExecutor,
  input: VerifyOrderEacInput,
  options: YmRequestOptions = {},
): Promise<VerifyOrderEacResponse> {
  return execute(definition, input, options);
}
