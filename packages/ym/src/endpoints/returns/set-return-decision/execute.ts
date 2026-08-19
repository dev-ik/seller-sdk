// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSetReturnDecisionResponse } from "./contract.js";
import type {
  SetReturnDecisionInput,
  SetReturnDecisionResponse,
} from "./types.js";

export const SET_RETURN_DECISION_OPERATION_ID = "setReturnDecision";

const definition: YmOperationDefinition<SetReturnDecisionResponse> = {
  operationId: SET_RETURN_DECISION_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
    { name: "returnId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSetReturnDecisionResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSetReturnDecision(
  execute: YmOperationExecutor,
  input: SetReturnDecisionInput,
  options: YmRequestOptions = {},
): Promise<SetReturnDecisionResponse> {
  return execute(definition, input, options);
}
