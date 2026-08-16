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
import {
  fboPostingAdditionalDataSchema,
  fboPostingAnalyticsDataSchema,
  fboPostingExternalOrderSchema,
  fboPostingLegalInfoSchema,
} from "../../shared/contract.js";
import type { ListFboPostingsV3Response } from "./types.js";
const cancellationSchema = object({
  cancel_reason: string().optional(),
  cancellation_initiator: string().optional(),
  cancellation_type: string().optional(),
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
const moneySchema = object({
  amount: string().optional(),
  currency: string().optional(),
});
const productSchema = object({
  digital_codes: array(string()).optional(),
  is_marketplace_buyout: boolean().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  price: moneySchema.optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
});
const postingSchema = object({
  additional_data: array(fboPostingAdditionalDataSchema).optional(),
  analytics_data: fboPostingAnalyticsDataSchema.optional(),
  cancel_reason_id: integerSchema.optional(),
  cancellation: cancellationSchema.optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  external_order: fboPostingExternalOrderSchema.optional(),
  financial_data: financialDataSchema.optional(),
  in_process_at: rfc3339DateTimeSchema.optional(),
  legal_info: fboPostingLegalInfoSchema.optional(),
  order_id: integerSchema.optional(),
  order_number: string().optional(),
  posting_number: string().optional(),
  products: array(productSchema).optional(),
  status: string().optional(),
  substatus: string().optional(),
});
export const listFboPostingsV3ResponseSchema: Schema<ListFboPostingsV3Response> =
  object({
    cursor: string().optional(),
    has_next: boolean().optional(),
    postings: array(postingSchema).optional(),
  });
