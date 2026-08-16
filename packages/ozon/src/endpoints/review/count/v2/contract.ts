import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetReviewCountV2Response } from "./types.js";

export const getReviewCountV2ResponseSchema: Schema<GetReviewCountV2Response> =
  object({
    new: integerSchema.optional(),
    processed: integerSchema.optional(),
    total: integerSchema.optional(),
    viewed: integerSchema.optional(),
  });
