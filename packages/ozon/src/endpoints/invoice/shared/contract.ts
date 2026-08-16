import { object, string } from "@safe-shape/core";

/** @internal */
export const invoiceHsCodeSchema = object({
  code: string().optional(),
  sku: string().optional(),
});
