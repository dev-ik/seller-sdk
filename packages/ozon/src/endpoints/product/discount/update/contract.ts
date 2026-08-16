import { boolean, object, type Schema } from "@safe-shape/core";
import type { UpdateProductDiscountResponse } from "./types.js";

export const updateProductDiscountResponseSchema: Schema<UpdateProductDiscountResponse> =
  object({
    result: boolean().optional(),
  });
