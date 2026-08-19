// Generated runtime response contract for this Yandex Market endpoint.
import { chatsComponents } from "../../../contracts/chats.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetChatMessageResponse } from "./types.js";

const getChatMessageResponse200Schema = createYmSchema<GetChatMessageResponse>(
  { kind: "ref", name: "GetChatMessageResponse" },
  chatsComponents,
);

export function parseGetChatMessageResponse(
  status: number,
  input: unknown,
): GetChatMessageResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getChatMessageResponse200Schema,
        input,
        "getChatMessage",
      );
    default:
      return unexpectedYmSuccessStatus("getChatMessage", status);
  }
}
