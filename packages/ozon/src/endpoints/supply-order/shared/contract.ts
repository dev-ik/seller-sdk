import { literal, object, string, union } from "@safe-shape/core";

export const supplyOrderStateSchema = union([
  literal("UNSPECIFIED"),
  literal("DATA_FILLING"),
  literal("READY_TO_SUPPLY"),
  literal("ACCEPTED_AT_SUPPLY_WAREHOUSE"),
  literal("IN_TRANSIT"),
  literal("ACCEPTANCE_AT_STORAGE_WAREHOUSE"),
  literal("REPORTS_CONFIRMATION_AWAITING"),
  literal("REPORT_REJECTED"),
  literal("COMPLETED"),
  literal("REJECTED_AT_SUPPLY_WAREHOUSE"),
  literal("CANCELLED"),
  literal("OVERDUE"),
]);

export const supplyOrderTimeslotSchema = object({
  from: string().optional(),
  to: string().optional(),
});

export const supplyOrderTimezoneSchema = object({
  iana_name: string().optional(),
  offset: string().optional(),
});

export const supplyOrderTimeslotUpdateErrorSchema = union([
  literal("UPDATE_TIMESLOT_ERROR_UNSPECIFIED"),
  literal("UPDATE_TIMESLOT_ERROR_INVALID_ORDER_STATE"),
  literal("UPDATE_TIMESLOT_ERROR_INCOMPATIBLE_ORDER_FLOW"),
  literal("UPDATE_TIMESLOT_ERROR_SET_TIMESLOT_DEADLINE_EXCEED"),
  literal("UPDATE_TIMESLOT_ERROR_OUT_OF_ALLOWED_RANGE"),
  literal("UPDATE_TIMESLOT_ERROR_ORDER_NOT_BELONG_CONTRACTOR"),
  literal("UPDATE_TIMESLOT_ERROR_ORDER_NOT_BELONG_COMPANY"),
  literal("UPDATE_TIMESLOT_ERROR_PICKUP_ORDER_LIMIT_EXCEEDED"),
  literal("UPDATE_TIMESLOT_ERROR_LIMIT_OF_CHANGING_TIMESLOT_EXCEEDED"),
]);

export const supplyOrderPassErrorSchema = union([
  literal("SET_VEHICLE_ERROR_UNSPECIFIED"),
  literal("SET_VEHICLE_ERROR_INVALID_ORDER_STATE"),
  literal("SET_VEHICLE_ERROR_VEHICLE_NOT_REQUIRED"),
  literal("SET_VEHICLE_ERROR_ORDER_NOT_BELONG_CONTRACTOR"),
  literal("SET_VEHICLE_ERROR_ORDER_NOT_BELONG_COMPANY"),
]);
