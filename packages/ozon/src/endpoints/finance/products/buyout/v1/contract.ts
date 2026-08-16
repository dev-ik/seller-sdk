import { array, number, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { GetFinanceProductsBuyoutV1Response } from "./types.js";

export const getFinanceProductsBuyoutV1ResponseSchema: Schema<GetFinanceProductsBuyoutV1Response> =
  object({
    products: array(
      object({
        amount: number().optional(),
        buyout_price: number().optional(),
        deduction_by_category_percent: number().optional(),
        name: string().optional(),
        offer_id: string().optional(),
        posting_number: string().optional(),
        quantity: integerSchema.optional(),
        seller_price_per_instance: number().optional(),
        sku: integerSchema.optional(),
        vat_percent: integerSchema.optional(),
      }),
    ).optional(),
  });
