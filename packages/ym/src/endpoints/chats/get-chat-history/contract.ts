// Generated runtime response contract for this Yandex Market endpoint.
import { chatsComponents } from "../../../contracts/chats.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetChatHistoryResponse } from "./types.js";

const getChatHistoryResponse200Schema = createYmSchema<GetChatHistoryResponse>(
  { kind: "ref", name: "GetChatHistoryResponse" },
  chatsComponents,
);

export function parseGetChatHistoryResponse(
  status: number,
  input: unknown,
): GetChatHistoryResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getChatHistoryResponse200Schema,
        input,
        "getChatHistory",
      );
    default:
      return unexpectedYmSuccessStatus("getChatHistory", status);
  }
}
