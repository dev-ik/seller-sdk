import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetProductRatingBySkuResponse } from "./types.js";

const condition = object({
  cost: number().optional(),
  description: string().optional(),
  fulfilled: boolean().optional(),
  key: string().optional(),
});

const improveAttribute = object({
  id: integerSchema.optional(),
  name: string().optional(),
});

const group = object({
  conditions: array(condition).optional(),
  improve_at_least: integerSchema.optional(),
  improve_attributes: array(improveAttribute).optional(),
  key: string().optional(),
  name: string().optional(),
  rating: number().optional(),
  weight: number().optional(),
});

const product = object({
  groups: array(group).optional(),
  rating: number().optional(),
  sku: integerSchema.optional(),
});

export const getProductRatingBySkuResponseSchema: Schema<GetProductRatingBySkuResponse> =
  object({
    products: array(product).optional(),
  });
