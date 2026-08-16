import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { pricingStrategyCompetitorSchema } from "../shared/contract.js";
import type { GetPricingStrategyResponse } from "./types.js";

export const getPricingStrategyResponseSchema: Schema<GetPricingStrategyResponse> =
  object({
    result: object({
      competitors: array(pricingStrategyCompetitorSchema).optional(),
      enabled: boolean().optional(),
      name: string().optional(),
      type: string().optional(),
      update_type: string().optional(),
    }).optional(),
  });
