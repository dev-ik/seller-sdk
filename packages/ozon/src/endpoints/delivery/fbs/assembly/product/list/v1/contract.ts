import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import type { ListFbsAssemblyProductsResponse } from "./types.js";

const postingSchema = object({
  posting_number: string().optional(),
  quantity: integerSchema.optional(),
});

const productSchema = object({
  offer_id: string().optional(),
  picture_url: string().optional(),
  postings: array(postingSchema).optional(),
  product_name: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
});

export const listFbsAssemblyProductsResponseSchema: Schema<ListFbsAssemblyProductsResponse> =
  object({
    has_next: boolean().optional(),
    products: array(productSchema).optional(),
    products_count: integerSchema.optional(),
  });
