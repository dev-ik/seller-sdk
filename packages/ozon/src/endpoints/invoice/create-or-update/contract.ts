import { boolean, object, type Schema } from "@safe-shape/core";
import type { CreateOrUpdateInvoiceResponse } from "./types.js";
export const createOrUpdateInvoiceResponseSchema: Schema<CreateOrUpdateInvoiceResponse> =
  object({ result: boolean().optional() });
