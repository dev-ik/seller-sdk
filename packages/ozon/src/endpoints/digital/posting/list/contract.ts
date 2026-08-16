import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { ListDigitalPostingsResponse } from "./types.js";

const additionalDataSchema = object({
  key: string().optional(),
  value: string().optional(),
});

const analyticsSchema = object({
  city: string().optional(),
  delivery_type: string().optional(),
  is_legal: boolean().optional(),
  is_premium: boolean().optional(),
  payment_type_group_name: string().optional(),
  region: string().optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
});

const financialProductSchema = object({
  actions: array(string()).optional(),
  commission_amount: number().optional(),
  commission_percent: integerSchema.optional(),
  commissions_currency_code: string().optional(),
  currency_code: string().optional(),
  customer_currency_code: string().optional(),
  customer_price: number().optional(),
  old_price: number().optional(),
  payout: number().optional(),
  price: number().optional(),
  product_id: integerSchema.optional(),
  quantity: integerSchema.optional(),
  total_discount_percent: number().optional(),
  total_discount_value: number().optional(),
});

const financialDataSchema = object({
  cluster_from: string().optional(),
  cluster_to: string().optional(),
  products: array(financialProductSchema).optional(),
});

const legalInfoSchema = object({
  company_name: string().optional(),
  inn: string().optional(),
  kpp: string().optional(),
});

const productSchema = object({
  currency_code: string().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  price: string().optional(),
  required_qty_for_digital_code: integerSchema.optional(),
  sku: integerSchema.optional(),
});

const postingSchema = object({
  additional_data: array(additionalDataSchema).optional(),
  analytics_data: analyticsSchema.optional(),
  cancel_reason_id: integerSchema.optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  financial_data: financialDataSchema.optional(),
  in_process_at: rfc3339DateTimeSchema.optional(),
  legal_info: legalInfoSchema.optional(),
  order_id: integerSchema.optional(),
  order_number: string().optional(),
  posting_number: string().optional(),
  products: array(productSchema).optional(),
  status: string().optional(),
  waiting_deadline_for_digital_code: rfc3339DateTimeSchema.optional(),
});

/** @internal */
export const listDigitalPostingsResponseSchema: Schema<ListDigitalPostingsResponse> =
  object({
    result: array(postingSchema).optional(),
  });
