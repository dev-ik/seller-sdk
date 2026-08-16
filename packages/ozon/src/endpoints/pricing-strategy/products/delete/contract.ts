import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { DeleteProductsFromPricingStrategyResponse } from "./types.js";

export const deleteProductsFromPricingStrategyResponseSchema: Schema<DeleteProductsFromPricingStrategyResponse> =
  object({
    result: object({
      failed_product_count: integerSchema.optional(),
    }).optional(),
  });
