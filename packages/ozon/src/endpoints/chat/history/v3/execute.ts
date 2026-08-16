import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { getChatHistoryV3ResponseSchema } from "./contract.js";
import type {
  GetChatHistoryV3Request,
  GetChatHistoryV3Response,
} from "./types.js";
export const GET_CHAT_HISTORY_V3_OPERATION_ID = "ChatAPI_ChatHistoryV3";
export async function executeGetChatHistoryV3(
  transport: Transport,
  input: GetChatHistoryV3Request,
  options: OzonRequestOptions = {},
): Promise<GetChatHistoryV3Response> {
  const response = await transport.request({
    operationId: GET_CHAT_HISTORY_V3_OPERATION_ID,
    method: "POST",
    path: "/v3/chat/history",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getChatHistoryV3ResponseSchema,
    response.body,
    GET_CHAT_HISTORY_V3_OPERATION_ID,
  );
}
