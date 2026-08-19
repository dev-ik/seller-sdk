// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetChatMessageResponse } from "./contract.js";
import type { GetChatMessageInput, GetChatMessageResponse } from "./types.js";

export const GET_CHAT_MESSAGE_OPERATION_ID = "getChatMessage";

const definition: YmOperationDefinition<GetChatMessageResponse> = {
  operationId: GET_CHAT_MESSAGE_OPERATION_ID,
  method: "GET",
  path: "/v2/businesses/{businessId}/chats/message",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "chatId", location: "query", required: true, array: false },
    { name: "messageId", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetChatMessageResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetChatMessage(
  execute: YmOperationExecutor,
  input: GetChatMessageInput,
  options: YmRequestOptions = {},
): Promise<GetChatMessageResponse> {
  return execute(definition, input, options);
}
