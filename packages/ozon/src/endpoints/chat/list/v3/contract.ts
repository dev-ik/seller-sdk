import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { chatV3Schema } from "../../shared/v3/contract.js";
import type { ListChatsV3Response } from "./types.js";
export const listChatsV3ResponseSchema: Schema<ListChatsV3Response> = object({
  chats: array(chatV3Schema).optional(),
  cursor: string().optional(),
  has_next: boolean().optional(),
  total_unread_count: integerSchema.optional(),
});
