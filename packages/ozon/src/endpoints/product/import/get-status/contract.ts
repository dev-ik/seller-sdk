import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetProductImportStatusResponse } from "./types.js";

const itemError = object({
  attribute_id: integerSchema.optional(),
  attribute_name: string().optional(),
  code: string().optional(),
  description: string().optional(),
  field: string().optional(),
  level: string().optional(),
  message: string().optional(),
  state: string().optional(),
});

const item = object({
  errors: array(itemError).optional(),
  offer_id: string().optional(),
  product_id: integerSchema.optional(),
  status: string().optional(),
});

const result = object({
  items: array(item).optional(),
  total: integerSchema.optional(),
});

export const getProductImportStatusResponseSchema: Schema<GetProductImportStatusResponse> =
  object({
    result: result.optional(),
  });
