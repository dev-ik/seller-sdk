import { array, object, string, type Schema } from "@safe-shape/core";
import type { UpdateProductOfferIdsResponse } from "./types.js";

const updateError = object({
  message: string().optional(),
  offer_id: string().optional(),
});

export const updateProductOfferIdsResponseSchema: Schema<UpdateProductOfferIdsResponse> =
  object({
    errors: array(updateError).optional(),
  });
