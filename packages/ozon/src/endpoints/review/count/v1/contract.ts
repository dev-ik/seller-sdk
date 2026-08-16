import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetReviewCountV1Response } from "./types.js";

export const getReviewCountV1ResponseSchema: Schema<GetReviewCountV1Response> =
  object({
    processed: integerSchema.optional(),
    total: integerSchema.optional(),
    unprocessed: integerSchema.optional(),
  });
