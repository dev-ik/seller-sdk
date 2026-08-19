// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetReturnApplicationResponse } from "./contract.js";
import type {
  GetReturnApplicationInput,
  GetReturnApplicationResponse,
} from "./types.js";

export const GET_RETURN_APPLICATION_OPERATION_ID = "getReturnApplication";

const definition: YmOperationDefinition<GetReturnApplicationResponse> = {
  operationId: GET_RETURN_APPLICATION_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/application",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
    { name: "returnId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "array-buffer",
  accept: "application/pdf",
  parseResponse: parseGetReturnApplicationResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetReturnApplication(
  execute: YmOperationExecutor,
  input: GetReturnApplicationInput,
  options: YmRequestOptions = {},
): Promise<GetReturnApplicationResponse> {
  return execute(definition, input, options);
}
