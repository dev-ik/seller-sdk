import { boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetPricingStrategyProductInfoResponse } from "./types.js";

export const getPricingStrategyProductInfoResponseSchema: Schema<GetPricingStrategyProductInfoResponse> =
  object({
    result: object({
      strategy_id: string().optional(),
      is_enabled: boolean().optional(),
      strategy_product_price: integerSchema.optional(),
      price_downloaded_at: string().optional(),
      strategy_competitor_id: integerSchema.optional(),
      strategy_competitor_product_url: string().optional(),
    }).optional(),
  });
