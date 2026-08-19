// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSetOrderBoxLayoutResponse } from "./contract.js";
import type {
  SetOrderBoxLayoutInput,
  SetOrderBoxLayoutResponse,
} from "./types.js";

export const SET_ORDER_BOX_LAYOUT_OPERATION_ID = "setOrderBoxLayout";

const definition: YmOperationDefinition<SetOrderBoxLayoutResponse> = {
  operationId: SET_ORDER_BOX_LAYOUT_OPERATION_ID,
  method: "PUT",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/boxes",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSetOrderBoxLayoutResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSetOrderBoxLayout(
  execute: YmOperationExecutor,
  input: SetOrderBoxLayoutInput,
  options: YmRequestOptions = {},
): Promise<SetOrderBoxLayoutResponse> {
  return execute(definition, input, options);
}
