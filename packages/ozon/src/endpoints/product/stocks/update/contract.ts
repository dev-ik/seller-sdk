import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { UpdateProductStocksResponse } from "./types.js";

const error = object({
  code: string().optional(),
  message: string().optional(),
});

const result = object({
  errors: array(error).optional(),
  offer_id: string().optional(),
  product_id: integerSchema.optional(),
  updated: boolean().optional(),
  warehouse_id: integerSchema.optional(),
});

export const updateProductStocksResponseSchema: Schema<UpdateProductStocksResponse> =
  object({
    result: array(result).optional(),
  });
