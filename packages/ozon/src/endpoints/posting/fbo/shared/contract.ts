import { array, boolean, number, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";

export const fboPostingAdditionalDataSchema = object({
  key: string().optional(),
  value: string().optional(),
});
export const fboPostingAnalyticsDataSchema = object({
  city: string().optional(),
  delivery_type: string().optional(),
  is_legal: boolean().optional(),
  is_premium: boolean().optional(),
  payment_type_group_name: string().optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
  client_delivery_date_begin: rfc3339DateTimeSchema.optional(),
  client_delivery_date_end: rfc3339DateTimeSchema.optional(),
});
export const fboPostingLegalInfoSchema = object({
  company_name: string().optional(),
  inn: string().optional(),
  kpp: string().optional(),
});
export const fboPostingProductV2Schema = object({
  digital_codes: array(string()).optional(),
  name: string().optional(),
  offer_id: string().optional(),
  currency_code: string().optional(),
  price: string().optional(),
  is_marketplace_buyout: boolean().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
});
export const fboPostingFinancialProductV2Schema = object({
  actions: array(string()).optional(),
  currency_code: string().optional(),
  commission_amount: number().optional(),
  commission_percent: integerSchema.optional(),
  commissions_currency_code: string().optional(),
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
export const fboPostingFinancialDataV2Schema = object({
  cluster_from: string().optional(),
  cluster_to: string().optional(),
  products: array(fboPostingFinancialProductV2Schema).optional(),
});
export const fboPostingExternalOrderSchema = object({
  is_external: boolean().optional(),
  platform_name: string().optional(),
});
export const fboPostingV2Schema = object({
  additional_data: array(fboPostingAdditionalDataSchema).optional(),
  analytics_data: fboPostingAnalyticsDataSchema.optional(),
  cancel_reason_id: integerSchema.optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  external_order: fboPostingExternalOrderSchema.optional(),
  fact_delivery_date: rfc3339DateTimeSchema.optional(),
  financial_data: fboPostingFinancialDataV2Schema.optional(),
  in_process_at: rfc3339DateTimeSchema.optional(),
  legal_info: fboPostingLegalInfoSchema.optional(),
  order_id: integerSchema.optional(),
  order_number: string().optional(),
  posting_number: string().optional(),
  products: array(fboPostingProductV2Schema).optional(),
  status: string().optional(),
  substatus: string().optional(),
});
