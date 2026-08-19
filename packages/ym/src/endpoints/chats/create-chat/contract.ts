// Generated runtime response contract for this Yandex Market endpoint.
import { chatsComponents } from "../../../contracts/chats.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { CreateChatResponse } from "./types.js";

const createChatResponse200Schema = createYmSchema<CreateChatResponse>(
  { kind: "ref", name: "CreateChatResponse" },
  chatsComponents,
);

export function parseCreateChatResponse(
  status: number,
  input: unknown,
): CreateChatResponse {
  switch (status) {
    case 200:
      return parseYmResponse(createChatResponse200Schema, input, "createChat");
    default:
      return unexpectedYmSuccessStatus("createChat", status);
  }
}
