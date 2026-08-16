import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { SplitTraceableFbsPostingResponse } from "./types.js";
const productSchema = object({
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
});
const postingSchema = object({
  posting_number: string().optional(),
  potential_blr_traceable: boolean().optional(),
  products: array(productSchema).optional(),
});
export const splitTraceableFbsPostingResponseSchema: Schema<SplitTraceableFbsPostingResponse> =
  object({ postings: array(postingSchema).optional() });
