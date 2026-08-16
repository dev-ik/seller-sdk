import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { rfc3339DateTimeSchema } from "../../../../../../../contracts/rfc3339-date-time.js";
import type { GetFbpDirectTimeslotsV1Response } from "./types.js";
const reason = union([
  literal("EMPTY_TIMESLOTS_REASON_UNSPECIFIED"),
  literal("LOGISTICS_UNKNOWN"),
  literal("NO_ROUTE"),
  literal("NO_ROUTE_SCHEDULES"),
  literal("NO_LOGISTICS_CAPACITY"),
  literal("SCHEDULE_UNKNOWN"),
  literal("NOT_ENOUGH_CAPACITY"),
  literal("NOT_ENOUGH_TRUCKS"),
  literal("LIMITS_NOT_AVAILABLE"),
  literal("CROSS_DOCK_RESERVE_MISSING"),
  literal("SCHEDULE_RESERVE_MISSING"),
]);
export const getFbpDirectTimeslotsV1ResponseSchema: Schema<GetFbpDirectTimeslotsV1Response> =
  object({
    reasons: array(reason).optional(),
    timeslots: array(
      object({
        timeslot_end: rfc3339DateTimeSchema.optional(),
        timeslot_start: rfc3339DateTimeSchema.optional(),
      }),
    ).optional(),
    warehouse_timezone_name: string().optional(),
  });
