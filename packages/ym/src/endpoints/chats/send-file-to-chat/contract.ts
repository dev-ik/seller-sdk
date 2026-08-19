// Generated runtime response contract for this Yandex Market endpoint.
import { chatsComponents } from "../../../contracts/chats.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SendFileToChatResponse } from "./types.js";

const sendFileToChatResponse200Schema = createYmSchema<SendFileToChatResponse>(
  { kind: "ref", name: "EmptyApiResponse" },
  chatsComponents,
);

export function parseSendFileToChatResponse(
  status: number,
  input: unknown,
): SendFileToChatResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        sendFileToChatResponse200Schema,
        input,
        "sendFileToChat",
      );
    default:
      return unexpectedYmSuccessStatus("sendFileToChat", status);
  }
}
