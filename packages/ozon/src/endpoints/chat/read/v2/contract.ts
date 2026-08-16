import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ReadChatV2Response } from "./types.js";

export const readChatV2ResponseSchema: Schema<ReadChatV2Response> = object({
  unread_count: integerSchema.optional(),
});
