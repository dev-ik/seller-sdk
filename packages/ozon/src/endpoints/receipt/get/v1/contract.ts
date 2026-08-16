import { object, string, type Schema } from "@safe-shape/core";
import type { GetReceiptV1Response } from "./types.js";

export const getReceiptV1ResponseSchema: Schema<GetReceiptV1Response> = object({
  content: string().optional(),
});
