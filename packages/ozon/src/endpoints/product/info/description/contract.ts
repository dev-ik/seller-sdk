import { object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetProductDescriptionResponse } from "./types.js";

const productDescription = object({
  description: string().optional(),
  id: integerSchema.optional(),
  name: string().optional(),
  offer_id: string().optional(),
});

export const getProductDescriptionResponseSchema: Schema<GetProductDescriptionResponse> =
  object({
    result: productDescription.optional(),
  });
