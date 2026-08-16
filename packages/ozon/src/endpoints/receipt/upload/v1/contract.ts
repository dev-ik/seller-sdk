import { object, string, type Schema } from "@safe-shape/core";
import type { UploadReceiptV1Response } from "./types.js";

export const uploadReceiptV1ResponseSchema: Schema<UploadReceiptV1Response> =
  object({ receipt_id: string().optional() });
