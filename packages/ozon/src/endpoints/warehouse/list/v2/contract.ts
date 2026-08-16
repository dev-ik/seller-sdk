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
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { ListWarehousesV2Response } from "./types.js";

const carriageLabelTypeSchema = union([
  literal("UNSPECIFIED"),
  literal("BIG"),
  literal("SMALL"),
]);
const firstMileTypeSchema = union([
  literal("UNSPECIFIED"),
  literal("PICK_UP"),
  literal("DROP_OFF"),
]);
const workingDaySchema = union([
  literal("UNSPECIFIED"),
  literal("MONDAY"),
  literal("TUESDAY"),
  literal("WEDNESDAY"),
  literal("THURSDAY"),
  literal("FRIDAY"),
  literal("SATURDAY"),
  literal("SUNDAY"),
]);
const addressInfoSchema = object({
  address: string().optional(),
  latitude: number().optional(),
  longitude: number().optional(),
  utc: string().optional(),
});
const firstMileSchema = object({
  dropoff_point_id: string().optional(),
  first_mile_is_changing: boolean().optional(),
  timeslot_from: string().optional(),
  timeslot_id: integerSchema.optional(),
  timeslot_to: string().optional(),
  type: firstMileTypeSchema.optional(),
});
const workingHoursSchema = object({
  time_from: rfc3339DateTimeSchema.optional(),
  time_to: rfc3339DateTimeSchema.optional(),
});
const timetableSchema = object({
  timetable_from: rfc3339DateTimeSchema.optional(),
  timetable_to: rfc3339DateTimeSchema.optional(),
  working_hours: array(workingHoursSchema).optional(),
});
const warehouseSchema = object({
  address_info: addressInfoSchema.optional(),
  carriage_label_type: carriageLabelTypeSchema.optional(),
  courier_comment: string().optional(),
  courier_phones: array(string()).optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  cut_in_time: integerSchema.optional(),
  first_mile: firstMileSchema.optional(),
  has_entrusted_acceptance: boolean().optional(),
  has_postings_limit: boolean().optional(),
  is_auto_assembly: boolean().optional(),
  is_comfort: boolean().optional(),
  is_express: boolean().optional(),
  is_kgt: boolean().optional(),
  is_rfbs: boolean().optional(),
  is_waybill_enabled: boolean().optional(),
  min_postings_limit: integerSchema.optional(),
  name: string().optional(),
  pause_at: union([rfc3339DateTimeSchema, literal(null)]).optional(),
  phone: string().optional(),
  postings_limit: integerSchema.optional(),
  sla_cut_in: integerSchema.optional(),
  status: string().optional(),
  timetable: timetableSchema.optional(),
  updated_at: rfc3339DateTimeSchema.optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_type: string().optional(),
  with_item_list: boolean().optional(),
  working_days: array(workingDaySchema).optional(),
});

export const listWarehousesV2ResponseSchema: Schema<ListWarehousesV2Response> =
  object({
    cursor: string().optional(),
    warehouses: array(warehouseSchema).optional(),
    has_next: boolean().optional(),
  });
