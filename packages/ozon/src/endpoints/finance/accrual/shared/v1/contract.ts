import { object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { OzonAccrualFee, OzonAccrualMoney } from "./types.js";

export const accrualMoneySchema: Schema<OzonAccrualMoney> = object({
  amount: string().optional(),
  currency: string().optional(),
});

export const accrualFeeSchema: Schema<OzonAccrualFee> = object({
  accrued: accrualMoneySchema.optional(),
  type_id: integerSchema.optional(),
});
