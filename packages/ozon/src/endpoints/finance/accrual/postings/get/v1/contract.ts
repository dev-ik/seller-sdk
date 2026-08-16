import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import { accrualMoneySchema } from "../../../shared/v1/contract.js";
import type {
  GetFinanceAccrualPostingsV1Response,
  OzonPostingAccrual,
  OzonPostingAccruals,
} from "./types.js";

const accrualSchema: Schema<OzonPostingAccrual> = object({
  accrual_date: string().optional(),
  accrued: accrualMoneySchema.optional(),
  quantity: union([integerSchema, literal(null)]).optional(),
  seller_price: union([accrualMoneySchema, literal(null)]).optional(),
  sku: union([integerSchema, literal(null)]).optional(),
  type_id: integerSchema.optional(),
});

const postingSchema: Schema<OzonPostingAccruals> = object({
  accruals: array(accrualSchema).optional(),
  posting_number: string().optional(),
});

export const getFinanceAccrualPostingsV1ResponseSchema: Schema<GetFinanceAccrualPostingsV1Response> =
  object({ posting_accruals: array(postingSchema).optional() });
