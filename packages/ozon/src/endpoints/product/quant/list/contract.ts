import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ListQuantProductsResponse } from "./types.js";

const quantSchema = object({
  quant_code: string().optional(),
  quant_size: integerSchema.optional(),
});

const productSchema = object({
  offer_id: string().optional(),
  product_id: integerSchema.optional(),
  quants: array(quantSchema).optional(),
});

/** @internal */
export const listQuantProductsResponseSchema: Schema<ListQuantProductsResponse> =
  object({
    cursor: string().optional(),
    products: array(productSchema).optional(),
    total_items: integerSchema.optional(),
  });
