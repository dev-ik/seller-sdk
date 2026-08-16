import { object, string, type Schema } from "@safe-shape/core";
import type { SendChatFileV1Response } from "./types.js";
export const sendChatFileV1ResponseSchema: Schema<SendChatFileV1Response> =
  object({ result: string().optional() });
