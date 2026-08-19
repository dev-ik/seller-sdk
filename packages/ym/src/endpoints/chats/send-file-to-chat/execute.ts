// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseSendFileToChatResponse } from "./contract.js";
import type { SendFileToChatInput, SendFileToChatResponse } from "./types.js";

export const SEND_FILE_TO_CHAT_OPERATION_ID = "sendFileToChat";

const definition: YmOperationDefinition<SendFileToChatResponse> = {
  operationId: SEND_FILE_TO_CHAT_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/chats/file/send",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "chatId", location: "query", required: true, array: false },
  ],
  requestContentType: "multipart/form-data",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseSendFileToChatResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeSendFileToChat(
  execute: YmOperationExecutor,
  input: SendFileToChatInput,
  options: YmRequestOptions = {},
): Promise<SendFileToChatResponse> {
  return execute(definition, input, options);
}
