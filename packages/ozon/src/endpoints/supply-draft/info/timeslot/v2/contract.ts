import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import type { GetSupplyDraftTimeslotsResponse } from "./types.js";
const error = union([
  literal("UNSPECIFIED"),
  literal("INVALID_CLUSTERS_COUNT"),
  literal("REQUESTED_PERIOD_MORE_THAN_MAX"),
  literal("UNDEFINED"),
]);
const timeslot = object({
  from_in_timezone: string().optional(),
  to_in_timezone: string().optional(),
});
const days = object({
  date_in_timezone: string().optional(),
  timeslots: array(timeslot).optional(),
});
export const getSupplyDraftTimeslotsResponseSchema: Schema<GetSupplyDraftTimeslotsResponse> =
  object({
    error_reason: error.optional(),
    result: object({
      drop_off_warehouse_timeslots: object({
        current_time_in_timezone: string().optional(),
        days: array(days).optional(),
        warehouse_timezone: string().optional(),
      }).optional(),
      requested_date_from: string().optional(),
      requested_date_to: string().optional(),
    }).optional(),
  });
