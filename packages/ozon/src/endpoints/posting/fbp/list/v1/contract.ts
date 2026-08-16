import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import type { ListFbpPostingsV1Response } from "./types.js";

const moneySchema = object({
  amount: string().optional(),
  currency: string().optional(),
});
const commissionSchema = object({
  amount: number().optional(),
  payout: number().optional(),
  percent: number().optional(),
});
const financialProductSchema = object({
  actions: array(
    object({
      action_id: string().optional(),
      date_from: rfc3339DateTimeSchema.optional(),
      date_to: rfc3339DateTimeSchema.optional(),
      description: string().optional(),
      discount_percent: number().optional(),
      discount_value: number().optional(),
      is_from_seller: boolean().optional(),
    }),
  ).optional(),
  commissions_currency_code: string().optional(),
  old_price: number().optional(),
  posting_commission: commissionSchema.optional(),
  price: number().optional(),
  product_id: integerSchema.optional(),
  quantity: integerSchema.optional(),
  return_commission: commissionSchema.optional(),
  total_discount_percent: number().optional(),
  total_discount_value: number().optional(),
});

export const listFbpPostingsV1ResponseSchema: Schema<ListFbpPostingsV1Response> =
  object({
    cursor: string().optional(),
    postings: array(
      object({
        financial_data: object({
          cluster_from: string().optional(),
          cluster_to: string().optional(),
          delivery_amount: number().optional(),
          products: array(financialProductSchema).optional(),
        }).optional(),
        in_process_at: rfc3339DateTimeSchema.optional(),
        order_date: rfc3339DateTimeSchema.optional(),
        order_id: integerSchema.optional(),
        order_number: string().optional(),
        posting_number: string().optional(),
        products: array(
          object({
            customer_price: moneySchema.optional(),
            name: string().optional(),
            offer_id: string().optional(),
            price: moneySchema.optional(),
            quantity: integerSchema.optional(),
            seller_price: moneySchema.optional(),
            sku: integerSchema.optional(),
          }),
        ).optional(),
        provider_id: integerSchema.optional(),
        status: string().optional(),
      }),
    ).optional(),
  });
