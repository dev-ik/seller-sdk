import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ListPricingCompetitorsResponse } from "./types.js";

const competitor = object({
  name: string().optional(),
  id: integerSchema.optional(),
});

export const listPricingCompetitorsResponseSchema: Schema<ListPricingCompetitorsResponse> =
  object({
    competitor: array(competitor).optional(),
    total: integerSchema.optional(),
  });
