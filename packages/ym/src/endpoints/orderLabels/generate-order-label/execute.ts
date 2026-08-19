// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateOrderLabelResponse } from "./contract.js";
import type {
  GenerateOrderLabelInput,
  GenerateOrderLabelResponse,
} from "./types.js";

export const GENERATE_ORDER_LABEL_OPERATION_ID = "generateOrderLabel";

const definition: YmOperationDefinition<GenerateOrderLabelResponse> = {
  operationId: GENERATE_ORDER_LABEL_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/shipments/{shipmentId}/boxes/{boxId}/label",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
    { name: "shipmentId", location: "path", required: true, array: false },
    { name: "boxId", location: "path", required: true, array: false },
    { name: "format", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "array-buffer",
  accept: "application/pdf",
  parseResponse: parseGenerateOrderLabelResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateOrderLabel(
  execute: YmOperationExecutor,
  input: GenerateOrderLabelInput,
  options: YmRequestOptions = {},
): Promise<GenerateOrderLabelResponse> {
  return execute(definition, input, options);
}
