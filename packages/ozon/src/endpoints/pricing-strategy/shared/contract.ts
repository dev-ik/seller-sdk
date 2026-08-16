import { number, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { OzonPricingStrategyCompetitor } from "./types.js";

export const pricingStrategyCompetitorSchema: Schema<OzonPricingStrategyCompetitor> =
  object({
    coefficient: number(),
    competitor_id: integerSchema,
  });
