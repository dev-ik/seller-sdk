import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import type { ListSupplyOrderTimeslotsV2Response } from "./types.js";

const reasonSchema = union([
  literal("INVALID_ORDER_STATE"),
  literal("IS_VIRTUAL"),
  literal("SET_TIMESLOT_DEADLINE_EXCEED"),
  literal("ORDER_DOES_NOT_BELONG_TO_COMPANY"),
]);
export const listSupplyOrderTimeslotsV2ResponseSchema: Schema<ListSupplyOrderTimeslotsV2Response> =
  object({
    limit_exceeded: object({
      changes_limit: integerSchema.optional(),
    }).optional(),
    timeslot_change_forbidden: object({
      error_reasons: array(reasonSchema).optional(),
    }).optional(),
    timeslots_info: object({
      limitations: object({
        changes_count: integerSchema.optional(),
        changes_limit: integerSchema.optional(),
      }).optional(),
      timeslots: array(
        object({
          from: rfc3339DateTimeSchema.optional(),
          to: rfc3339DateTimeSchema.optional(),
        }),
      ).optional(),
      timezone: object({
        iana_name: string().optional(),
        offset: integerSchema.optional(),
      }).optional(),
    }).optional(),
  });
