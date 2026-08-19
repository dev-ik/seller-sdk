// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetReturnAvailableDecisionsResponse } from "./contract.js";
import type {
  GetReturnAvailableDecisionsInput,
  GetReturnAvailableDecisionsResponse,
} from "./types.js";

export const GET_RETURN_AVAILABLE_DECISIONS_OPERATION_ID =
  "getReturnAvailableDecisions";

const definition: YmOperationDefinition<GetReturnAvailableDecisionsResponse> = {
  operationId: GET_RETURN_AVAILABLE_DECISIONS_OPERATION_ID,
  method: "POST",
  path: "/v1/businesses/{businessId}/returns/decisions",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetReturnAvailableDecisionsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetReturnAvailableDecisions(
  execute: YmOperationExecutor,
  input: GetReturnAvailableDecisionsInput,
  options: YmRequestOptions = {},
): Promise<GetReturnAvailableDecisionsResponse> {
  return execute(definition, input, options);
}
