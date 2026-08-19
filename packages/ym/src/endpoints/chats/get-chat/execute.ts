// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetChatResponse } from "./contract.js";
import type { GetChatInput, GetChatResponse } from "./types.js";

export const GET_CHAT_OPERATION_ID = "getChat";

const definition: YmOperationDefinition<GetChatResponse> = {
  operationId: GET_CHAT_OPERATION_ID,
  method: "GET",
  path: "/v2/businesses/{businessId}/chat",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "chatId", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetChatResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetChat(
  execute: YmOperationExecutor,
  input: GetChatInput,
  options: YmRequestOptions = {},
): Promise<GetChatResponse> {
  return execute(definition, input, options);
}
