import { object, string, type Schema } from "@safe-shape/core";
import type { SendChatMessageV1Response } from "./types.js";

export const sendChatMessageV1ResponseSchema: Schema<SendChatMessageV1Response> =
  object({ result: string().optional() });
