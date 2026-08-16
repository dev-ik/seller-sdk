import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { ListPricingStrategiesResponse } from "./types.js";

const strategy = object({
  id: string().optional(),
  name: string().optional(),
  type: string().optional(),
  update_type: string().optional(),
  updated_at: string().optional(),
  products_count: integerSchema.optional(),
  competitors_count: integerSchema.optional(),
  enabled: boolean().optional(),
});

export const listPricingStrategiesResponseSchema: Schema<ListPricingStrategiesResponse> =
  object({
    strategies: array(strategy).optional(),
    total: integerSchema.optional(),
  });
