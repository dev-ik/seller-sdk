import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ValidateFbsPostingProductExemplarsV5Response } from "./types.js";

const markSchema = object({
  errors: array(string()).optional(),
  mark: string().optional(),
  mark_type: string().optional(),
  valid: boolean().optional(),
});

const exemplarSchema = object({
  errors: array(string()).optional(),
  gtd: string().optional(),
  marks: array(markSchema).optional(),
  rnpt: string().optional(),
  valid: boolean().optional(),
  weight: number().optional(),
});

const productSchema = object({
  error: string().optional(),
  exemplars: array(exemplarSchema).optional(),
  product_id: integerSchema.optional(),
  valid: boolean().optional(),
});

export const validateFbsPostingProductExemplarsV5ResponseSchema: Schema<ValidateFbsPostingProductExemplarsV5Response> =
  object({ products: array(productSchema).optional() });
