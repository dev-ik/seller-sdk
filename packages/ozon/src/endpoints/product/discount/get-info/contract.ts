import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetDiscountedProductInfoResponse } from "./types.js";

const item = object({
  comment_reason_damaged: string().optional(),
  condition: string().optional(),
  condition_estimation: string().optional(),
  defects: string().optional(),
  discounted_sku: integerSchema.optional(),
  mechanical_damage: string().optional(),
  package_damage: string().optional(),
  packaging_violation: string().optional(),
  reason_damaged: string().optional(),
  repair: string().optional(),
  shortage: string().optional(),
  sku: integerSchema.optional(),
  warranty_type: string().optional(),
});

export const getDiscountedProductInfoResponseSchema: Schema<GetDiscountedProductInfoResponse> =
  object({
    items: array(item).optional(),
  });
