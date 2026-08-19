// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateOrderLabelsResponse } from "./contract.js";
import type {
  GenerateOrderLabelsInput,
  GenerateOrderLabelsResponse,
} from "./types.js";

export const GENERATE_ORDER_LABELS_OPERATION_ID = "generateOrderLabels";

const definition: YmOperationDefinition<GenerateOrderLabelsResponse> = {
  operationId: GENERATE_ORDER_LABELS_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/labels",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
    { name: "format", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "array-buffer",
  accept: "application/pdf",
  parseResponse: parseGenerateOrderLabelsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateOrderLabels(
  execute: YmOperationExecutor,
  input: GenerateOrderLabelsInput,
  options: YmRequestOptions = {},
): Promise<GenerateOrderLabelsResponse> {
  return execute(definition, input, options);
}
