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
import type {
  GetFbpPostingV1Response,
  OzonFbpCommission,
  OzonFbpFinancialProduct,
  OzonFbpMoney,
  OzonFbpPosting,
  OzonFbpPostingProduct,
  OzonFbpPostingProductAction,
} from "./types.js";

const moneySchema: Schema<OzonFbpMoney> = object({
  amount: string().optional(),
  currency: string().optional(),
});

const actionSchema: Schema<OzonFbpPostingProductAction> = object({
  action_id: integerSchema.optional(),
  action_type: string().optional(),
  date_from: rfc3339DateTimeSchema.optional(),
  date_to: rfc3339DateTimeSchema.optional(),
  description: string().optional(),
  discount_percent: number().optional(),
  discount_value: number().optional(),
});

const commissionSchema: Schema<OzonFbpCommission> = object({
  amount: number().optional(),
  payout: number().optional(),
  percent: number().optional(),
});

const financialProductSchema: Schema<OzonFbpFinancialProduct> = object({
  actions: array(actionSchema).optional(),
  commissions_price: moneySchema.optional(),
  customer_price: moneySchema.optional(),
  old_price: number().optional(),
  posting_commission: commissionSchema.optional(),
  quantity: integerSchema.optional(),
  return_commission: commissionSchema.optional(),
  seller_price: moneySchema.optional(),
  sku: integerSchema.optional(),
  total_discount_percent: number().optional(),
  total_discount_value: number().optional(),
});

const productSchema: Schema<OzonFbpPostingProduct> = object({
  has_imei: boolean().optional(),
  marketplace_seller_price: moneySchema.optional(),
  name: string().optional(),
  offer_id: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
  weight_max: number().optional(),
});

const postingSchema: Schema<OzonFbpPosting> = object({
  analytics_data: object({
    city: string().optional(),
    delivery_date_begin: rfc3339DateTimeSchema.optional(),
    delivery_date_end: rfc3339DateTimeSchema.optional(),
    delivery_type: string().optional(),
    region: string().optional(),
    warehouse_id: integerSchema.optional(),
  }).optional(),
  cancellation: object({
    cancel_reason: string().optional(),
    cancel_reason_id: integerSchema.optional(),
    cancellation_initiator: string().optional(),
    cancellation_type: string().optional(),
  }).optional(),
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
  products: array(productSchema).optional(),
  status: integerSchema.optional(),
  substatus: string().optional(),
  tpl_provider_id: integerSchema.optional(),
});

export const getFbpPostingV1ResponseSchema: Schema<GetFbpPostingV1Response> =
  object({ posting: postingSchema.optional() });
