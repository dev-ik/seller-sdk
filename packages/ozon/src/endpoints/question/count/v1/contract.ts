import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetQuestionCountV1Response } from "./types.js";

export const getQuestionCountV1ResponseSchema: Schema<GetQuestionCountV1Response> =
  object({
    all: integerSchema.optional(),
    new: integerSchema.optional(),
    processed: integerSchema.optional(),
    unprocessed: integerSchema.optional(),
    viewed: integerSchema.optional(),
  });
