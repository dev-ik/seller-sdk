import {
  array,
  boolean,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { GetSupplyOrderActSummaryResponse } from "./types.js";
const state = union([
  literal("UNSPECIFIED"),
  literal("AWAITING_APPROVAL_BY_SELLER"),
  literal("REJECT_BY_SELLER"),
  literal("AGREEMENT_WITH_SELLER"),
  literal("ACCEPTED"),
]);
const type = union([
  literal("UNSPECIFIED"),
  literal("ACCEPTANCE"),
  literal("DEFECT"),
  literal("SURPLUS"),
  literal("SHORTCOMING"),
]);
const money = object({
  amount: string().optional(),
  currency: string().optional(),
});
const amount = object({
  amount: money.optional(),
  amount_vat: money.optional(),
  amount_without_vat: money.optional(),
});
const summary = object({
  approved_amount: amount.optional(),
  approved_quantity: integerSchema.optional(),
  declared_quantity: integerSchema.optional(),
  fact_amount: amount.optional(),
  fact_quantity: integerSchema.optional(),
  sku_quantity: integerSchema.optional(),
  unidentified_quantity: integerSchema.optional(),
});
const act = object({
  act_id: integerSchema.optional(),
  act_number: string().optional(),
  act_state: state.optional(),
  created_date: string().optional(),
  deadline_utc: rfc3339DateTimeSchema.optional(),
  summary: summary.optional(),
  type: type.optional(),
});
const supplies = object({
  is_agreement_completed: boolean().optional(),
  supply_acts: array(act).optional(),
  supply_id: integerSchema.optional(),
});
export const getSupplyOrderActSummaryResponseSchema: Schema<GetSupplyOrderActSummaryResponse> =
  object({ supplies_acts: array(supplies).optional() });
