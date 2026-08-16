import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import type { DeleteProductsResponse } from "./types.js";

const deleteStatus = object({
  error: string().optional(),
  is_deleted: boolean().optional(),
  offer_id: string().optional(),
});

export const deleteProductsResponseSchema: Schema<DeleteProductsResponse> =
  object({
    status: array(deleteStatus).optional(),
  });
