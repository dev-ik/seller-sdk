// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseCreateChatResponse } from "./contract.js";
import type { CreateChatInput, CreateChatResponse } from "./types.js";

export const CREATE_CHAT_OPERATION_ID = "createChat";

const definition: YmOperationDefinition<CreateChatResponse> = {
  operationId: CREATE_CHAT_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/chats/new",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseCreateChatResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeCreateChat(
  execute: YmOperationExecutor,
  input: CreateChatInput,
  options: YmRequestOptions = {},
): Promise<CreateChatResponse> {
  return execute(definition, input, options);
}
