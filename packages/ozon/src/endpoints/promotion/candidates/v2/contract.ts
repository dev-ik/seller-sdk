import {
  array,
  boolean,
  number,
  object,
  record,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ListPromotionCandidatesV2Response } from "./types.js";
export const listPromotionCandidatesV2ResponseSchema: Schema<ListPromotionCandidatesV2Response> =
  object({
    last_id: string().optional(),
    products: array(
      object({
        action_price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        alert_max_action_price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        alert_max_action_price_failed: boolean().optional(),
        current_boost: number().optional(),
        id: integerSchema.optional(),
        is_quarantined: boolean().optional(),
        marketplace_seller_price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        max_action_price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        max_boost: number().optional(),
        min_boost: number().optional(),
        min_seller_price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        min_stock: integerSchema.optional(),
        price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        price_max_elastic: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        price_min_elastic: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        recommended_stock: integerSchema.optional(),
        website_prices: object({
          price: object({
            amount: string().optional(),
            currency: string().optional(),
          }).optional(),
          prices_by_schema: record(
            object({
              black_price: object({
                amount: string().optional(),
                currency: string().optional(),
              }).optional(),
              green_price: object({
                amount: string().optional(),
                currency: string().optional(),
              }).optional(),
            }),
          ).optional(),
        }).optional(),
      }),
    ).optional(),
    total: integerSchema.optional(),
  });
