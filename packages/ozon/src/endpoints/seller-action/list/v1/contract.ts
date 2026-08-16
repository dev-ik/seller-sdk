import {
  array,
  boolean,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ListSellerActionsV1Response } from "./types.js";
const status = union([
  literal("ACTIVE"),
  literal("ENDED"),
  literal("PLANNED"),
  literal("PAUSED"),
]);
const type = union([
  literal("DISCOUNT"),
  literal("VOUCHER_DISCOUNT"),
  literal("DISCOUNT_WITH_CONDITION"),
  literal("INSTALLMENT"),
  literal("INDIVIDUAL_DISCOUNT_BY_PRODUCTS"),
  literal("OZON_ACCOUNT_DISCOUNT"),
  literal("MULTI_LEVEL_DISCOUNT_ON_AMOUNT"),
]);
const params = object({
  addresses: array(string()).optional(),
  auto_stop_action_reason: union([
    literal("UNSPECIFIED"),
    literal("BUDGET_EXCEEDED"),
    literal("FAST_BUDGET_SPENDING"),
    literal("BUDGET_SPENDING_IS_CRAZY"),
  ]).optional(),
  budget: number().optional(),
  budget_spent: number().optional(),
  date_end: string().optional(),
  date_start: string().optional(),
  discount_levels: array(
    object({
      discount_value: number().optional(),
      order_amount: number().optional(),
    }),
  ).optional(),
  discount_type: union([
    literal("UNSPECIFIED"),
    literal("RUB"),
    literal("PERCENT"),
    literal("FINAL_PRICE"),
    literal("INSTALLED_PERIOD"),
    literal("CURRENCY"),
  ]).optional(),
  discount_value: number().optional(),
  is_legal_entities_segment: boolean().optional(),
  min_action_percent: number().optional(),
  min_order_amount: number().optional(),
  status: status.optional(),
  title: string().optional(),
  type: type.optional(),
  warehouses: array(string()).optional(),
});
export const listSellerActionsV1ResponseSchema: Schema<ListSellerActionsV1Response> =
  object({
    actions: array(
      object({
        action_id: integerSchema.optional(),
        action_parameters: params.optional(),
        allow_delete: boolean().optional(),
        highlight_url: string().optional(),
        is_editable: boolean().optional(),
        is_participated: boolean().optional(),
        is_turn_on: boolean().optional(),
        sku_count: integerSchema.optional(),
      }),
    ).optional(),
    total: integerSchema.optional(),
  });
