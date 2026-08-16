import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { ListProductsResponse } from "./types.js";

const quant = object({
  quant_code: string().optional(),
  quant_size: integerSchema.optional(),
});

const item = object({
  archived: boolean().optional(),
  has_fbo_stocks: boolean().optional(),
  has_fbs_stocks: boolean().optional(),
  is_discounted: boolean().optional(),
  offer_id: string().optional(),
  product_id: integerSchema.optional(),
  quants: array(quant).optional(),
  sku: integerSchema.optional(),
});

const result = object({
  items: array(item).optional(),
  last_id: string().optional(),
  total: integerSchema.optional(),
});

export const listProductsResponseSchema: Schema<ListProductsResponse> = object({
  result: result.optional(),
});
