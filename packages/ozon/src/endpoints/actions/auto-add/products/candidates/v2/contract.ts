import {
  array,
  boolean,
  object,
  record,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListAutoAddProductCandidatesV2Response } from "./types.js";
export const listAutoAddProductCandidatesV2ResponseSchema: Schema<ListAutoAddProductCandidatesV2Response> =
  object({
    products: array(
      object({
        action_price_to_auto_add: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        base_price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        currency: string().optional(),
        has_expired_min_seller_price: boolean().optional(),
        id: integerSchema.optional(),
        is_manually_added: boolean().optional(),
        marketplace_seller_price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        max_discount_price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        min_action_quantity: integerSchema.optional(),
        min_seller_price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        name: string().optional(),
        offer_id: string().optional(),
        price: object({
          amount: string().optional(),
          currency: string().optional(),
        }).optional(),
        quantity_to_auto_add: integerSchema.optional(),
        sku: integerSchema.optional(),
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
        will_be_quarantined: boolean().optional(),
      }),
    ).optional(),
    total: integerSchema.optional(),
  });
