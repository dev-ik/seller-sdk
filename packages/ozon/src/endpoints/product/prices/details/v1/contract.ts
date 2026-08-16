import { array, number, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type {
  GetProductPriceDetailsV1Response,
  OzonProductPriceDetailsMoney,
  OzonProductPriceIndexDataDetails,
} from "./types.js";

const moneySchema: Schema<OzonProductPriceDetailsMoney> = object({
  amount: string().optional(),
  currency: string().optional(),
});

const indexDataSchema: Schema<OzonProductPriceIndexDataDetails> = object({
  min_price: moneySchema.optional(),
  price_index: number().optional(),
  url: string().optional(),
});

export const getProductPriceDetailsV1ResponseSchema: Schema<GetProductPriceDetailsV1Response> =
  object({
    prices: array(
      object({
        customer_price: moneySchema.optional(),
        discount_percent: number().optional(),
        offer_id: string().optional(),
        price: moneySchema.optional(),
        price_indexes: array(
          object({
            external_index_data: indexDataSchema.optional(),
            self_index_data: indexDataSchema.optional(),
          }),
        ).optional(),
        sku: integerSchema.optional(),
      }),
    ).optional(),
  });
