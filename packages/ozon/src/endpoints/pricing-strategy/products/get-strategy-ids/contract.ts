import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetPricingStrategyIdsByProductIdsResponse } from "./types.js";

const productInfo = object({
  product_id: integerSchema.optional(),
  strategy_id: string().optional(),
});

export const getPricingStrategyIdsByProductIdsResponseSchema: Schema<GetPricingStrategyIdsByProductIdsResponse> =
  object({
    result: object({
      products_info: array(productInfo).optional(),
    }).optional(),
  });
