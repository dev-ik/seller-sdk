import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { UpdatePromotionProductsV1Response } from "./types.js";
export const updatePromotionProductsV1ResponseSchema: Schema<UpdatePromotionProductsV1Response> =
  object({
    active_product_ids: array(string()).optional(),
    deactivated_product_ids: array(string()).optional(),
    rejected: array(
      object({
        product_id: integerSchema.optional(),
        reason: string().optional(),
      }),
    ).optional(),
    warnings: array(
      object({
        product_id: integerSchema.optional(),
        reason: string().optional(),
      }),
    ).optional(),
  });
