import { array, number, object, string, type Schema } from "@safe-shape/core";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";
import { invoiceHsCodeSchema } from "../shared/contract.js";
import type { GetInvoiceResponse } from "./types.js";
export const getInvoiceResponseSchema: Schema<GetInvoiceResponse> = object({
  result: object({
    date: rfc3339DateTimeSchema.optional(),
    file_url: string().optional(),
    hs_codes: array(invoiceHsCodeSchema).optional(),
    number: string().optional(),
    price: number().optional(),
    price_currency: string().optional(),
  }).optional(),
});
