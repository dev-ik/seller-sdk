import { array, literal, object, union, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { CountSupplyOrdersByStatusResponse } from "./types.js";

const stateSchema = union([
  literal("ORDER_STATE_UNSPECIFIED"),
  literal("ORDER_STATE_DATA_FILLING"),
  literal("ORDER_STATE_READY_TO_SUPPLY"),
  literal("ORDER_STATE_ACCEPTED_AT_SUPPLY_WAREHOUSE"),
  literal("ORDER_STATE_IN_TRANSIT"),
  literal("ORDER_STATE_ACCEPTANCE_AT_STORAGE_WAREHOUSE"),
  literal("ORDER_STATE_REPORTS_CONFIRMATION_AWAITING"),
  literal("ORDER_STATE_REPORT_REJECTED"),
  literal("ORDER_STATE_COMPLETED"),
  literal("ORDER_STATE_REJECTED_AT_SUPPLY_WAREHOUSE"),
  literal("ORDER_STATE_CANCELLED"),
]);

export const countSupplyOrdersByStatusResponseSchema: Schema<CountSupplyOrdersByStatusResponse> =
  object({
    items: array(
      object({
        count: integerSchema.optional(),
        order_state: stateSchema.optional(),
      }),
    ).optional(),
  });
