import { literal, union } from "@safe-shape/core";
export const transportLabelStatusSchema = union([
  literal("SUCCESS"),
  literal("IN_PROGRESS"),
  literal("FAILED"),
]);
export const transportLabelErrorSchema = union([
  literal("INVALID_STATE"),
  literal("OPERATION_NOT_FOUND"),
  literal("OPERATION_FAILED"),
  literal("SUPPLY_NOT_BELONG_CONTRACTOR"),
  literal("SUPPLY_NOT_BELONG_COMPANY"),
  literal("SUPPLY_IS_EMPTY"),
  literal("CARGOES_NOT_FOUND"),
]);
export const transportOrderLabelErrorSchema = union([
  literal("ORDER_NOT_FOUND"),
  literal("OPERATION_NOT_FOUND"),
  literal("OPERATION_FAILED"),
  literal("ALL_SUPPLIES_SKIPPED"),
  literal("LABELS_COUNT_EXCEED"),
  literal("UNDEFINED"),
]);
