import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { SplitFbsPostingResponse } from "./types.js";
const productSchema = object({
  product_id: integerSchema,
  quantity: integerSchema,
});
const postingSchema = object({
  posting_number: string().optional(),
  products: array(productSchema).optional(),
});
export const splitFbsPostingResponseSchema: Schema<SplitFbsPostingResponse> =
  object({
    parent_posting: postingSchema.optional(),
    postings: array(postingSchema).optional(),
  });
