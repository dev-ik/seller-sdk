// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSubmitReturnDecisionResponse } from "./contract.js";
import type {
  SubmitReturnDecisionInput,
  SubmitReturnDecisionResponse,
} from "./types.js";

export const SUBMIT_RETURN_DECISION_OPERATION_ID = "submitReturnDecision";

const definition: YmOperationDefinition<SubmitReturnDecisionResponse> = {
  operationId: SUBMIT_RETURN_DECISION_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/submit",
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
  parseResponse: parseSubmitReturnDecisionResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSubmitReturnDecision(
  execute: YmOperationExecutor,
  input: SubmitReturnDecisionInput,
  options: YmRequestOptions = {},
): Promise<SubmitReturnDecisionResponse> {
  return execute(definition, input, options);
}
