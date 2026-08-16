import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { sendChatMessageV1ResponseSchema } from "./contract.js";
import type {
  SendChatMessageV1Request,
  SendChatMessageV1Response,
} from "./types.js";

export const SEND_CHAT_MESSAGE_V1_OPERATION_ID = "ChatAPI_ChatSendMessage";

export async function executeSendChatMessageV1(
  transport: Transport,
  input: SendChatMessageV1Request,
  options: OzonRequestOptions = {},
): Promise<SendChatMessageV1Response> {
  const response = await transport.request({
    operationId: SEND_CHAT_MESSAGE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/chat/send/message",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    sendChatMessageV1ResponseSchema,
    response.body,
    SEND_CHAT_MESSAGE_V1_OPERATION_ID,
  );
}
