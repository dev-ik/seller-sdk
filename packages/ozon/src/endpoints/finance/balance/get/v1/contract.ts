import { array, number, object, string, type Schema } from "@safe-shape/core";
import type {
  GetFinanceBalanceV1Response,
  OzonFinanceBalanceDetails,
  OzonFinanceBalanceFlow,
  OzonFinanceBalanceMoney,
} from "./types.js";

const moneySchema: Schema<OzonFinanceBalanceMoney> = object({
  currency_code: string().optional(),
  value: number().optional(),
});

const detailsSchema: Schema<OzonFinanceBalanceDetails> = object({
  partner_programs: moneySchema.optional(),
  points_for_discounts: string().optional(),
  revenue: moneySchema.optional(),
});

const flowSchema: Schema<OzonFinanceBalanceFlow> = object({
  amount: moneySchema.optional(),
  amount_details: detailsSchema.optional(),
  fee: moneySchema.optional(),
});

export const getFinanceBalanceV1ResponseSchema: Schema<GetFinanceBalanceV1Response> =
  object({
    cashflows: object({
      returns: flowSchema.optional(),
      sales: flowSchema.optional(),
      services: array(
        object({ amount: moneySchema.optional(), name: string().optional() }),
      ).optional(),
    }).optional(),
    total: object({
      accrued: moneySchema.optional(),
      closing_balance: moneySchema.optional(),
      opening_balance: moneySchema.optional(),
      payments: array(moneySchema).optional(),
    }).optional(),
  });
