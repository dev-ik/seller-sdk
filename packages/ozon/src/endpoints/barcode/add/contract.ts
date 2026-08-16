import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { AddProductBarcodesResponse } from "./types.js";

const errorSchema = object({
  barcode: string().optional(),
  code: string().optional(),
  error: string().optional(),
  sku: integerSchema.optional(),
});

/** @internal */
export const addProductBarcodesResponseSchema: Schema<AddProductBarcodesResponse> =
  object({
    errors: array(errorSchema).optional(),
  });
