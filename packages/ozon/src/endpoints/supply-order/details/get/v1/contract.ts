import {
  array,
  boolean,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import {
  supplyOrderStateSchema,
  supplyOrderTimeslotSchema,
  supplyOrderTimezoneSchema,
} from "../../../shared/contract.js";
import type { GetSupplyOrderDetailsResponse } from "./types.js";
const cancelReason = union([
  literal("UNSPECIFIED"),
  literal("INVALID_SUPPLY_STATE"),
  literal("SUPPLY_IS_VIRTUAL"),
  literal("SUPPLY_HAS_ACTIVE_UTD"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_COMPANY"),
  literal("PICKUP_SUPPLY_IS_LOCKED_DOWN"),
  literal("UNDEFINED"),
]);
const contentReason = union([
  literal("UNSPECIFIED"),
  literal("INCORRECT_SUPPLY_STATE"),
  literal("DEADLINE"),
  literal("UTD_IS_UPLOADED"),
  literal("STORAGE_WAREHOUSE_IS_NOT_WMS"),
  literal("CONTRACT_IS_NOT_VALID_FOR_HANDLING_ORDERS"),
  literal("SUPPLY_IS_VIRTUAL"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_COMPANY"),
  literal("UNDEFINED"),
]);
const overdueReason = union([
  literal("UNSPECIFIED"),
  literal("ORDER_TIMESLOT_EXPIRED"),
  literal("ORDER_TIMESLOT_NOT_SELECTED"),
  literal("NOT_READY_FOR_PICKUP"),
  literal("PICKUP_FAILED"),
  literal("UNDEFINED"),
]);
const supplyState = union([
  literal("UNSPECIFIED"),
  literal("DATA_FILLING"),
  literal("READY_TO_SUPPLY"),
  literal("ACCEPTED_AT_SUPPLY_WAREHOUSE"),
  literal("REJECTED_AT_SUPPLY_WAREHOUSE"),
  literal("IN_TRANSIT"),
  literal("ACCEPTED_AT_STORAGE_WAREHOUSE"),
  literal("REPORTS_CONFIRMATION_AWAITING"),
  literal("REPORT_REJECTED"),
  literal("COMPLETED"),
  literal("CANCELLED"),
  literal("OVERDUE"),
]);
const timeslotReason = union([
  literal("UNSPECIFIED"),
  literal("INVALID_ORDER_STATE"),
  literal("ORDER_IS_VIRTUAL"),
  literal("SET_TIMESLOT_DEADLINE_EXCEED"),
  literal("ORDER_DOES_NOT_BELONG_TO_COMPANY"),
  literal("UNDEFINED"),
]);
const vehicleReason = union([
  literal("UNSPECIFIED"),
  literal("INVALID_ORDER_STATE"),
  literal("VEHICLE_NOT_REQUIRED"),
  literal("ORDER_DOES_NOT_BELONG_TO_COMPANY"),
  literal("UNDEFINED"),
]);
const orderTags = object({
  is_econom: boolean().optional(),
  is_super_fbo: boolean().optional(),
  is_virtual: boolean().optional(),
  original_supply_id: integerSchema.optional(),
  product_super_fbo: boolean().optional(),
});
const supply = object({
  cancellation_allowability: object({
    can_not_set_reasons: array(cancelReason).optional(),
    can_set: boolean().optional(),
  }).optional(),
  content: object({
    bundle_id: string().optional(),
    can_not_set_reasons: array(contentReason).optional(),
    can_set: boolean().optional(),
  }).optional(),
  ettn_info: object({
    contains_valid: boolean().optional(),
    is_required: boolean().optional(),
    is_uploaded: boolean().optional(),
  }).optional(),
  is_crossdock: boolean().optional(),
  overdue_reason: overdueReason.optional(),
  storage_warehouse: object({
    address: string().optional(),
    arrival_date: rfc3339DateTimeSchema.optional(),
    name: string().optional(),
    warehouse_id: integerSchema.optional(),
  }).optional(),
  macrolocal_cluster_id: integerSchema.optional(),
  supply_id: integerSchema.optional(),
  supply_state: supplyState.optional(),
  supply_tags: object({
    is_ettn_required: boolean().optional(),
    is_evsd_required: boolean().optional(),
    is_jewelry: boolean().optional(),
    is_marking_possible: boolean().optional(),
    is_marking_required: boolean().optional(),
    is_utd: boolean().optional(),
  }).optional(),
});
const timeslot = object({
  can_not_set_reasons: array(timeslotReason).optional(),
  can_set: boolean().optional(),
  value: object({
    timeslot: supplyOrderTimeslotSchema.optional(),
    timezone_info: supplyOrderTimezoneSchema.optional(),
  }).optional(),
});
const vehicle = object({
  can_not_set_reasons: array(vehicleReason).optional(),
  can_set: boolean().optional(),
  value: object({
    driver_is_deleted: boolean().optional(),
    driver_name: string().optional(),
    driver_phone: string().optional(),
    vehicle_is_deleted: boolean().optional(),
    vehicle_model: string().optional(),
    vehicle_number: string().optional(),
  }).optional(),
});
export const getSupplyOrderDetailsResponseSchema: Schema<GetSupplyOrderDetailsResponse> =
  object({
    created_date: rfc3339DateTimeSchema.optional(),
    data_filling_deadline_utc: rfc3339DateTimeSchema.optional(),
    dropoff_warehouse_id: integerSchema.optional(),
    order_id: integerSchema.optional(),
    order_number: string().optional(),
    order_tags: orderTags.optional(),
    state: supplyOrderStateSchema.optional(),
    state_updated_date: rfc3339DateTimeSchema.optional(),
    supplies: array(supply).optional(),
    timeslot: timeslot.optional(),
    vehicle: vehicle.optional(),
  });
