import { number, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";

export const realizationReportHeaderSchema = object({
  contract_date: string().optional(),
  contract_number: string().optional(),
  currency_sys_name: string().optional(),
  doc_date: string().optional(),
  number: string().optional(),
  payer_inn: string().optional(),
  payer_kpp: string().optional(),
  payer_name: string().optional(),
  receiver_inn: string().optional(),
  receiver_kpp: string().optional(),
  receiver_name: string().optional(),
  start_date: string().optional(),
  stop_date: string().optional(),
});

export const realizationReportCommissionSchema = object({
  amount: number().optional(),
  bank_coinvestment: number().optional(),
  bonus: number().optional(),
  commission: number().optional(),
  compensation: number().optional(),
  pick_up_point_coinvestment: number().optional(),
  price_per_instance: number().optional(),
  quantity: integerSchema.optional(),
  standard_fee: number().optional(),
  stars: number().optional(),
  total: number().optional(),
});

export const realizationReportItemSchema = object({
  barcode: string().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  sku: integerSchema.optional(),
});
