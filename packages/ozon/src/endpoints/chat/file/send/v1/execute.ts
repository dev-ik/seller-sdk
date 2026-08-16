import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { sendChatFileV1ResponseSchema } from "./contract.js";
import type { SendChatFileV1Request, SendChatFileV1Response } from "./types.js";
export const SEND_CHAT_FILE_V1_OPERATION_ID = "ChatAPI_ChatSendFile";
export async function executeSendChatFileV1(
  transport: Transport,
  input: SendChatFileV1Request,
  options: OzonRequestOptions = {},
): Promise<SendChatFileV1Response> {
  const response = await transport.request({
    operationId: SEND_CHAT_FILE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/chat/send/file",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    sendChatFileV1ResponseSchema,
    response.body,
    SEND_CHAT_FILE_V1_OPERATION_ID,
  );
}
