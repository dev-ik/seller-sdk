import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ListProductsWithWrongVolumeResponse } from "./types.js";

const product = object({
  height: integerSchema.optional(),
  length: integerSchema.optional(),
  name: string().optional(),
  offer_id: string().optional(),
  product_id: integerSchema.optional(),
  sku: integerSchema.optional(),
  weight: integerSchema.optional(),
  width: integerSchema.optional(),
});

export const listProductsWithWrongVolumeResponseSchema: Schema<ListProductsWithWrongVolumeResponse> =
  object({
    cursor: string().optional(),
    products: array(product).optional(),
  });
