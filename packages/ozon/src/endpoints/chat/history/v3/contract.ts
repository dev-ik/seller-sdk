import { array, boolean, object, type Schema } from "@safe-shape/core";
import { chatMessageV3Schema } from "../../shared/v3/contract.js";
import type { GetChatHistoryV3Response } from "./types.js";
export const getChatHistoryV3ResponseSchema: Schema<GetChatHistoryV3Response> =
  object({
    has_next: boolean().optional(),
    messages: array(chatMessageV3Schema).optional(),
  });
