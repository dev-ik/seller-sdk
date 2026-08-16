import { array, object, string, type Schema } from "@safe-shape/core";
import type { ListPricingStrategyProductsResponse } from "./types.js";

export const listPricingStrategyProductsResponseSchema: Schema<ListPricingStrategyProductsResponse> =
  object({
    result: object({
      product_id: array(string()).optional(),
    }).optional(),
  });
