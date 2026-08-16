import {
  array,
  boolean,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetWarehouseInvalidProductsResponse } from "./types.js";

const validationStateSchema = union([
  literal("UNSPECIFIED"),
  literal("NOT_VALID"),
]);
const characteristicSchema = union([
  literal("UNSPECIFIED"),
  literal("LENGTH"),
  literal("WIDTH"),
  literal("HEIGHT"),
  literal("WEIGHT"),
  literal("SUM_OF_DIMENSIONS"),
  literal("VOLUME_WEIGHT"),
  literal("VOLUME"),
  literal("PRICE"),
  literal("LONGEST_SIDE"),
]);
const errorTypeSchema = union([
  literal("UNSPECIFIED"),
  literal("LESS_THAN_MIN"),
  literal("GREATER_THAN_MAX"),
]);
const sizeSchema = object({
  height_mm: integerSchema.optional(),
  length_mm: integerSchema.optional(),
  width_mm: integerSchema.optional(),
});
const moneySchema = object({
  currency: string().optional(),
  value: number().optional(),
});
const validationErrorSchema = object({
  characteristic: characteristicSchema.optional(),
  restriction_price: moneySchema.optional(),
  restriction_vwc: number().optional(),
  template_id: integerSchema.optional(),
  type: errorTypeSchema.optional(),
});
const validationResultSchema = object({
  item: object({
    size: sizeSchema.optional(),
    sku: integerSchema.optional(),
    weight_g: number().optional(),
  }).optional(),
  state: validationStateSchema.optional(),
  validation_errors: array(validationErrorSchema).optional(),
});

export const getWarehouseInvalidProductsResponseSchema: Schema<GetWarehouseInvalidProductsResponse> =
  object({
    has_next: boolean().optional(),
    last_id: integerSchema.optional(),
    validation_results: array(validationResultSchema).optional(),
    warehouse_id: integerSchema.optional(),
  });
