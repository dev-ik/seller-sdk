import {
  array,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { UpdateAutoAddProductsV1Response } from "./types.js";
const issue = object({
  key: integerSchema.optional(),
  value: number().optional(),
});
const code = union([
  literal("NOT_FOUND"),
  literal("NO_CHANGES"),
  literal("STOCK_REQUIRED"),
  literal("INVALID_ACTION_PRICE"),
  literal("MAX_ACTION_PRICE"),
  literal("REJECTED_LOW_PRICE"),
  literal("INVALID_CURRENCY"),
]);
export const updateAutoAddProductsV1ResponseSchema: Schema<UpdateAutoAddProductsV1Response> =
  object({
    below_min_price: array(issue).optional(),
    extremely_low_price: array(issue).optional(),
    failed_price: array(issue).optional(),
    rejected: array(
      object({
        code: code.optional(),
        product_id: integerSchema.optional(),
        reason: string().optional(),
      }),
    ).optional(),
    updated_ids: array(string()).optional(),
  });
