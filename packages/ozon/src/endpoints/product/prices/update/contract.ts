import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { UpdateProductPricesResponse } from "./types.js";

const error = object({
  code: string().optional(),
  message: string().optional(),
});

const result = object({
  errors: array(error).optional(),
  offer_id: string().optional(),
  product_id: integerSchema.optional(),
  updated: boolean().optional(),
});

export const updateProductPricesResponseSchema: Schema<UpdateProductPricesResponse> =
  object({
    result: array(result).optional(),
  });
