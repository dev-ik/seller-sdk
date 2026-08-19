// Generated runtime response contract for this Yandex Market endpoint.
import { chatsComponents } from "../../../contracts/chats.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SendMessageToChatResponse } from "./types.js";

const sendMessageToChatResponse200Schema =
  createYmSchema<SendMessageToChatResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    chatsComponents,
  );

export function parseSendMessageToChatResponse(
  status: number,
  input: unknown,
): SendMessageToChatResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        sendMessageToChatResponse200Schema,
        input,
        "sendMessageToChat",
      );
    default:
      return unexpectedYmSuccessStatus("sendMessageToChat", status);
  }
}
