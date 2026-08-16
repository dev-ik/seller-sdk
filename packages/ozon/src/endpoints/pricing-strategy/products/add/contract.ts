import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { AddProductsToPricingStrategyResponse } from "./types.js";

const error = object({
  code: string().optional(),
  error: string().optional(),
  product_id: integerSchema.optional(),
});

export const addProductsToPricingStrategyResponseSchema: Schema<AddProductsToPricingStrategyResponse> =
  object({
    result: object({
      errors: array(error).optional(),
      failed_product_count: integerSchema.optional(),
    }).optional(),
  });
