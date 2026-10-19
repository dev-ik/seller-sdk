import { array, number, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { UpdateAutoAddProductsV2Response } from "./types.js";
export const updateAutoAddProductsV2ResponseSchema: Schema<UpdateAutoAddProductsV2Response> =
  object({
    below_min_price: array(
      object({
        key: integerSchema.optional(),
        value: number().optional(),
      }),
    ).optional(),
    deactivated_ids: array(string()).optional(),
    extremely_low_price: array(
      object({
        key: integerSchema.optional(),
        value: number().optional(),
      }),
    ).optional(),
    failed_price: array(
      object({
        key: integerSchema.optional(),
        value: number().optional(),
      }),
    ).optional(),
    product_ids: array(string()).optional(),
    rejected: array(
      object({
        product_id: integerSchema.optional(),
        reason: string().optional(),
      }),
    ).optional(),
    warnings: array(
      object({
        product_id: integerSchema.optional(),
        reason: string().optional(),
      }),
    ).optional(),
  });
