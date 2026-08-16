import {
  array,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetB2BSalesJsonReportV1Response } from "./types.js";

const buyerSchema = object({
  address: string().optional(),
  inn: string().optional(),
  kpp: string().optional(),
  name: string().optional(),
});

const operationSchema = object({
  amount: number().optional(),
  cost_without_vat: number().optional(),
  date: string().optional(),
  gtd_number: string().optional(),
  origin_country: string().optional(),
  posting_number: string().optional(),
  price: number().optional(),
  quantity: integerSchema.optional(),
  rnpt_number: string().optional(),
  type: union([literal("DELIVERY"), literal("RETURN")]).optional(),
  vat_amount: number().optional(),
  vat_rate: number().optional(),
});

export const getB2BSalesJsonReportV1ResponseSchema: Schema<GetB2BSalesJsonReportV1Response> =
  object({
    date_from: string().optional(),
    date_to: string().optional(),
    invoices: array(
      object({
        buyer_info: buyerSchema.optional(),
        currency: string().optional(),
        currency_code: integerSchema.optional(),
        info: object({
          date: string().optional(),
          number: string().optional(),
          status: string().optional(),
          type: union([literal("UPD"), literal("UKD")]).optional(),
        }).optional(),
        offer_id: string().optional(),
        operations: array(operationSchema).optional(),
        product_name: string().optional(),
        sku: integerSchema.optional(),
        unit_code: integerSchema.optional(),
        unit_name: string().optional(),
      }),
    ).optional(),
    seller_info: object({
      company_name: string().optional(),
      inn: string().optional(),
      kpp: string().optional(),
    }).optional(),
  });
