import { array, object, string, type Schema } from "@safe-shape/core";
import type { DeactivatePromotionProductsV2Response } from "./types.js";
export const deactivatePromotionProductsV2ResponseSchema: Schema<DeactivatePromotionProductsV2Response> =
  object({
    product_ids: array(string()).optional(),
  });
