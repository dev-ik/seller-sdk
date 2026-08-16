import { object, string, type Schema } from "@safe-shape/core";
import type { UploadInvoiceFileResponse } from "./types.js";
export const uploadInvoiceFileResponseSchema: Schema<UploadInvoiceFileResponse> =
  object({ url: string().optional() });
