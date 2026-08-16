import { object, string, type Schema } from "@safe-shape/core";
import type { CreatePricingStrategyResponse } from "./types.js";

export const createPricingStrategyResponseSchema: Schema<CreatePricingStrategyResponse> =
  object({
    result: object({
      strategy_id: string().optional(),
    }).optional(),
  });
