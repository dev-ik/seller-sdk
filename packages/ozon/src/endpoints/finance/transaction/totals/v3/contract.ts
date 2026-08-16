import { number, object, type Schema } from "@safe-shape/core";
import type { GetFinanceTransactionTotalsV3Response } from "./types.js";

export const getFinanceTransactionTotalsV3ResponseSchema: Schema<GetFinanceTransactionTotalsV3Response> =
  object({
    result: object({
      accruals_for_sale: number().optional(),
      compensation_amount: number().optional(),
      money_transfer: number().optional(),
      others_amount: number().optional(),
      processing_and_delivery: number().optional(),
      refunds_and_cancellations: number().optional(),
      sale_commission: number().optional(),
      services_amount: number().optional(),
    }).optional(),
  });
