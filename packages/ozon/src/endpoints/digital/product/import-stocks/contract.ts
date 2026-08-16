import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ImportDigitalProductStocksResponse } from "./types.js";

const errorSchema = object({
  code: string().optional(),
  message: string().optional(),
});

const statusSchema = object({
  errors: array(errorSchema).optional(),
  offer_id: string().optional(),
  product_id: integerSchema.optional(),
  sku: integerSchema.optional(),
  updated: boolean().optional(),
});

/** @internal */
export const importDigitalProductStocksResponseSchema: Schema<ImportDigitalProductStocksResponse> =
  object({
    status: array(statusSchema).optional(),
  });
