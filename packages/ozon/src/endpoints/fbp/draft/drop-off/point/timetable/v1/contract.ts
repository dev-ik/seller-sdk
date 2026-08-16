import {
  array,
  boolean,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import type { GetFbpDropOffPointTimetableV1Response } from "./types.js";
const day = union([
  literal("DAY_OF_WEEK_UNSPECIFIED"),
  literal("MONDAY"),
  literal("TUESDAY"),
  literal("WEDNESDAY"),
  literal("THURSDAY"),
  literal("FRIDAY"),
  literal("SATURDAY"),
  literal("SUNDAY"),
]);
const slot = object({
  timeslot_end: string().optional(),
  timeslot_start: string().optional(),
});
export const getFbpDropOffPointTimetableV1ResponseSchema: Schema<GetFbpDropOffPointTimetableV1Response> =
  object({
    calendar: array(
      object({
        calendar_item: object({
          break_hours: slot.optional(),
          is_holiday: boolean().optional(),
          opening_hours: slot.optional(),
        }).optional(),
        day_of_week: day.optional(),
      }),
    ).optional(),
  });
