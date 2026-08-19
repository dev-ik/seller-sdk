// Generated runtime response contract for this Yandex Market endpoint.
import { chatsComponents } from "../../../contracts/chats.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetChatResponse } from "./types.js";

const getChatResponse200Schema = createYmSchema<GetChatResponse>(
  { kind: "ref", name: "GetChatResponse" },
  chatsComponents,
);

export function parseGetChatResponse(
  status: number,
  input: unknown,
): GetChatResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getChatResponse200Schema, input, "getChat");
    default:
      return unexpectedYmSuccessStatus("getChat", status);
  }
}
