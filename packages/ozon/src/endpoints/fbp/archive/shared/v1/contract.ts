import {
  boolean,
  literal,
  number,
  object,
  string,
  union,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";

export const fbpArchiveTimeslotSchema = object({
  timeslot_end: rfc3339DateTimeSchema.optional(),
  timeslot_start: rfc3339DateTimeSchema.optional(),
});

export const fbpArchiveSkuSummarySchema = object({
  rounded_total_volume_in_litres: number().optional(),
  total_items_count: integerSchema.optional(),
  total_quantity: integerSchema.optional(),
});

export const fbpArchiveDeclineReasonSchema = object({
  code: union([
    literal("DECLINE_REASON_CODE_UNSPECIFIED"),
    literal("CANNOT_CREATE_SUPPLY_ON_TPF"),
    literal("DROP_OFF_POINT_CLOSED"),
    literal("CODE_SUPPLY_LOST"),
    literal("COURIER_PICK_UP_REJECTED_BY_SELLER"),
    literal("BONDED_DOCUMENTS_REJECTED_BY_WAREHOUSE"),
  ]).optional(),
  message: string().optional(),
});

export const fbpArchiveDeliveryDetailsSchema = object({
  direct_details: object({
    by_seller_details: object({
      driver_name: string().optional(),
      vehicle_registration_number: string().optional(),
      vehicle_type: string().optional(),
    }).optional(),
    by_tpl_details: object({
      tracking_number: string().optional(),
      transport_company_name: string().optional(),
    }).optional(),
    timeslot_details: object({
      timeslot: fbpArchiveTimeslotSchema.optional(),
      timeslot_reservation_id: string().optional(),
    }).optional(),
  }).optional(),
  drop_off_point: object({
    id: integerSchema.optional(),
    province_uuid: string().optional(),
    timeslot: fbpArchiveTimeslotSchema.optional(),
  }).optional(),
  pickup_details: object({
    address: string().optional(),
    comment: string().optional(),
    date: rfc3339DateTimeSchema.optional(),
    sender_name: string().optional(),
    sender_phone: string().optional(),
  }).optional(),
  supply_type: union([
    literal("SUPPLY_TYPE_UNSPECIFIED"),
    literal("DIRECT_BY_SELLER"),
    literal("DIRECT_BY_TPL"),
    literal("DROP_OFF"),
    literal("PICK_UP"),
  ]).optional(),
});

export const fbpArchiveStatusSchema = union([
  literal("ARCHIVE_STATUS_UNSPECIFIED"),
  literal("COMPLETED"),
  literal("REJECTED_AT_SUPPLY_WAREHOUSE"),
  literal("CANCELLED_BY_SELLER"),
]);

export const fbpArchiveSupplySchema = object({
  act_file_uuid: string().optional(),
  bundle_id: string().optional(),
  bundle_sku_summary: fbpArchiveSkuSummarySchema.optional(),
  business_flow_type_id: integerSchema.optional(),
  created_date: rfc3339DateTimeSchema.optional(),
  decline_reason: fbpArchiveDeclineReasonSchema.optional(),
  delivery_details: fbpArchiveDeliveryDetailsSchema.optional(),
  has_act: boolean().optional(),
  has_label: boolean().optional(),
  id: integerSchema.optional(),
  order_draft_id: integerSchema.optional(),
  order_number: string().optional(),
  package_units_count: integerSchema.optional(),
  receive_date: rfc3339DateTimeSchema.optional(),
  row_version: integerSchema.optional(),
  status: fbpArchiveStatusSchema.optional(),
  supply_id: string().optional(),
  warehouse_id: integerSchema.optional(),
});
