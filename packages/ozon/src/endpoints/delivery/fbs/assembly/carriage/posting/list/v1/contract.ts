import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../../contracts/integer.js";
import type { ListFbsAssemblyCarriagePostingsResponse } from "./types.js";
const productSchema = object({
  offer_id: string().optional(),
  picture_url: string().optional(),
  product_name: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
});
const postingSchema = object({
  assembly_code: string().optional(),
  can_print_label: boolean().optional(),
  posting_number: string().optional(),
  products: array(productSchema).optional(),
});
export const listFbsAssemblyCarriagePostingsResponseSchema: Schema<ListFbsAssemblyCarriagePostingsResponse> =
  object({
    can_print_mass_label: boolean().optional(),
    cursor: string().optional(),
    postings: array(postingSchema).optional(),
  });
