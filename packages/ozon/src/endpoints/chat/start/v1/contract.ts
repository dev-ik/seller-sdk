import { object, string, type Schema } from "@safe-shape/core";
import type { StartChatV1Response } from "./types.js";

export const startChatV1ResponseSchema: Schema<StartChatV1Response> = object({
  result: object({ chat_id: string().optional() }).optional(),
});
