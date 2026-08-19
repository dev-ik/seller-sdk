// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSendMessageToChatResponse } from "./contract.js";
import type {
  SendMessageToChatInput,
  SendMessageToChatResponse,
} from "./types.js";

export const SEND_MESSAGE_TO_CHAT_OPERATION_ID = "sendMessageToChat";

const definition: YmOperationDefinition<SendMessageToChatResponse> = {
  operationId: SEND_MESSAGE_TO_CHAT_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/chats/message",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "chatId", location: "query", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSendMessageToChatResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSendMessageToChat(
  execute: YmOperationExecutor,
  input: SendMessageToChatInput,
  options: YmRequestOptions = {},
): Promise<SendMessageToChatResponse> {
  return execute(definition, input, options);
}
