// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetChatsResponse } from "./contract.js";
import type { GetChatsInput, GetChatsResponse } from "./types.js";

export const GET_CHATS_OPERATION_ID = "getChats";

const definition: YmOperationDefinition<GetChatsResponse> = {
  operationId: GET_CHATS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/chats",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetChatsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetChats(
  execute: YmOperationExecutor,
  input: GetChatsInput,
  options: YmRequestOptions = {},
): Promise<GetChatsResponse> {
  return execute(definition, input, options);
}
