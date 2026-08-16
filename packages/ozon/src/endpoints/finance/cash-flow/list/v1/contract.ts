import { array, number, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import type { ListFinanceCashFlowV1Response } from "./types.js";
const period = object({
  begin: rfc3339DateTimeSchema.optional(),
  end: rfc3339DateTimeSchema.optional(),
  id: integerSchema.optional(),
});
const item = object({ name: string().optional(), price: number().optional() });
const amounts = object({
  items: array(item).optional(),
  total: number().optional(),
});
const details = object({
  begin_balance_amount: number().optional(),
  delivery: object({
    amount: number().optional(),
    delivery_services: amounts.optional(),
    total: number().optional(),
  }).optional(),
  end_balance_amount: number().optional(),
  invoice_transfer: number().optional(),
  loan: number().optional(),
  others: amounts.optional(),
  payments: array(
    object({
      currency_code: string().optional(),
      payment: number().optional(),
    }),
  ).optional(),
  period: period.optional(),
  return: object({
    amount: number().optional(),
    return_services: amounts.optional(),
    total: number().optional(),
  }).optional(),
  rfbs: object({
    compensation_delivery_return: number().optional(),
    partial_compensation: number().optional(),
    partial_compensation_return: number().optional(),
    total: number().optional(),
    transfer_delivery: number().optional(),
    transfer_delivery_return: number().optional(),
  }).optional(),
  services: amounts.optional(),
});
export const listFinanceCashFlowV1ResponseSchema: Schema<ListFinanceCashFlowV1Response> =
  object({
    result: object({
      cash_flows: array(
        object({
          commission_amount: number().optional(),
          currency_code: string().optional(),
          item_delivery_and_return_amount: number().optional(),
          orders_amount: number().optional(),
          period: period.optional(),
          returns_amount: number().optional(),
          services_amount: number().optional(),
        }),
      ).optional(),
      details: details.optional(),
      page_count: integerSchema.optional(),
    }).optional(),
  });
