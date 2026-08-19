// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetReturnResponse } from "./contract.js";
import type { GetReturnInput, GetReturnResponse } from "./types.js";

export const GET_RETURN_OPERATION_ID = "getReturn";

const definition: YmOperationDefinition<GetReturnResponse> = {
  operationId: GET_RETURN_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "orderId", location: "path", required: true, array: false },
    { name: "returnId", location: "path", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetReturnResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetReturn(
  execute: YmOperationExecutor,
  input: GetReturnInput,
  options: YmRequestOptions = {},
): Promise<GetReturnResponse> {
  return execute(definition, input, options);
}
