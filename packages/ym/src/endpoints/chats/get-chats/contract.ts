// Generated runtime response contract for this Yandex Market endpoint.
import { chatsComponents } from "../../../contracts/chats.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetChatsResponse } from "./types.js";

const getChatsResponse200Schema = createYmSchema<GetChatsResponse>(
  { kind: "ref", name: "GetChatsResponse" },
  chatsComponents,
);

export function parseGetChatsResponse(
  status: number,
  input: unknown,
): GetChatsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getChatsResponse200Schema, input, "getChats");
    default:
      return unexpectedYmSuccessStatus("getChats", status);
  }
}
