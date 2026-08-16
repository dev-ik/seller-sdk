import { boolean, object, type Schema } from "@safe-shape/core";
import type { DeleteInvoiceResponse } from "./types.js";
export const deleteInvoiceResponseSchema: Schema<DeleteInvoiceResponse> =
  object({ result: boolean().optional() });
