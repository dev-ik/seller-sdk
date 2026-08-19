// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSkipGoodsFeedbacksReactionResponse } from "./contract.js";
import type {
  SkipGoodsFeedbacksReactionInput,
  SkipGoodsFeedbacksReactionResponse,
} from "./types.js";

export const SKIP_GOODS_FEEDBACKS_REACTION_OPERATION_ID =
  "skipGoodsFeedbacksReaction";

const definition: YmOperationDefinition<SkipGoodsFeedbacksReactionResponse> = {
  operationId: SKIP_GOODS_FEEDBACKS_REACTION_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/goods-feedback/skip-reaction",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "sourceType", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSkipGoodsFeedbacksReactionResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSkipGoodsFeedbacksReaction(
  execute: YmOperationExecutor,
  input: SkipGoodsFeedbacksReactionInput,
  options: YmRequestOptions = {},
): Promise<SkipGoodsFeedbacksReactionResponse> {
  return execute(definition, input, options);
}
