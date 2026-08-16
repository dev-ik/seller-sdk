import {
  array,
  boolean,
  literal,
  object,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { GetSupplyOrderCancelStatusResponse } from "./types.js";
const orderError = union([
  literal("INVALID_ORDER_STATE"),
  literal("ORDER_IS_VIRTUAL"),
  literal("ORDER_DOES_NOT_BELONG_TO_CONTRACTOR"),
  literal("ORDER_DOES_NOT_BELONG_TO_COMPANY"),
  literal("OTHER_ASYNCHRONOUS_OPERATION_IN_PROGRESS"),
]);
const supplyError = union([
  literal("INVALID_SUPPLY_STATE"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_CONTRACTOR"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_COMPANY"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_ORDER"),
  literal("SUPPLY_BELONGS_TO_VIRTUAL_ORDER"),
  literal("OTHER_ASYNCHRONOUS_OPERATION_IN_PROGRESS"),
]);
const status = union([
  literal("SUCCESS"),
  literal("IN_PROGRESS"),
  literal("ERROR"),
]);
export const getSupplyOrderCancelStatusResponseSchema: Schema<GetSupplyOrderCancelStatusResponse> =
  object({
    error_reasons: array(orderError).optional(),
    result: object({
      is_order_cancelled: boolean().optional(),
      supplies: array(
        object({
          error_reasons: array(supplyError).optional(),
          is_supply_cancelled: boolean().optional(),
          supply_id: integerSchema.optional(),
        }),
      ).optional(),
    }).optional(),
    status: status.optional(),
  });
