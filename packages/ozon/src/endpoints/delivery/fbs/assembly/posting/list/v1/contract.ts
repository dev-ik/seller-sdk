import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import type { ListFbsAssemblyPostingsResponse } from "./types.js";

const productSchema = object({
  offer_id: string().optional(),
  picture_url: string().optional(),
  product_name: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
});

const postingSchema = object({
  assembly_code: string().optional(),
  posting_number: string().optional(),
  products: array(productSchema).optional(),
});

export const listFbsAssemblyPostingsResponseSchema: Schema<ListFbsAssemblyPostingsResponse> =
  object({
    cursor: string().optional(),
    cutoff: string().optional(),
    postings: array(postingSchema).optional(),
  });
