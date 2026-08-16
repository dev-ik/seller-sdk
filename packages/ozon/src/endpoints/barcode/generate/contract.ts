import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { GenerateProductBarcodesResponse } from "./types.js";

const errorSchema = object({
  barcode: string().optional(),
  code: string().optional(),
  error: string().optional(),
  product_id: integerSchema.optional(),
});

/** @internal */
export const generateProductBarcodesResponseSchema: Schema<GenerateProductBarcodesResponse> =
  object({
    errors: array(errorSchema).optional(),
  });
