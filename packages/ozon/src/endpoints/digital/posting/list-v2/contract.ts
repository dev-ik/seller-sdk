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
import type { ListDigitalPostingsV2Response } from "./types.js";

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

const cancellationSchema = object({
  cancellation_initiator: string().optional(),
  cancellation_type: string().optional(),
});

const externalOrderSchema = object({
  is_external: boolean().optional(),
  platform_name: string().optional(),
});

const commissionSchema = object({
  amount: number().optional(),
  currency: string().optional(),
  percent: integerSchema.optional(),
});

const financialProductSchema = object({
  actions: array(string()).optional(),
  commission: commissionSchema.optional(),
  old_price: number().optional(),
  payout: number().optional(),
  price: number().optional(),
  product_id: integerSchema.optional(),
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

const moneySchema = object({
  amount: string().optional(),
  currency: string().optional(),
});

const productSchema = object({
  name: string().optional(),
  offer_id: string().optional(),
  price: moneySchema.optional(),
  quantity: integerSchema.optional(),
  required_qty_for_digital_code: integerSchema.optional(),
  sku: integerSchema.optional(),
});

const postingSchema = object({
  additional_data: array(additionalDataSchema).optional(),
  analytics_data: analyticsSchema.optional(),
  cancel_reason_id: integerSchema.optional(),
  cancellation: cancellationSchema.optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  external_order: externalOrderSchema.optional(),
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
export const listDigitalPostingsV2ResponseSchema: Schema<ListDigitalPostingsV2Response> =
  object({
    cursor: string().optional(),
    has_next: boolean().optional(),
    postings: array(postingSchema).optional(),
  });
