import {
  array,
  boolean,
  literal,
  number,
  object,
  string,
  union,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import { fbpArchiveDeliveryDetailsSchema } from "../../../archive/shared/v1/contract.js";
import { fbpCancellationStateSchema } from "../../../draft/shared/v1/contract.js";

export const fbpOrderValidationErrorTypeSchema = union([
  literal("ERROR_TYPE_UNSPECIFIED"),
  literal("DELIVERY_DRIVER_NAME_LENGTH_MAXIMUM_REACHED"),
  literal("DELIVERY_VEHICLE_GENRE_LENGTH_MAXIMUM_REACHED"),
  literal("DELIVERY_VEHICLE_REGISTRATION_PLATE_LENGTH_MAXIMUM_REACHED"),
  literal("DELIVERY_TPL_NAME_LENGTH_MAXIMUM_REACHED"),
  literal("DELIVERY_TRACKING_NUMBER_LENGTH_MAXIMUM_REACHED"),
  literal("DELIVERY_DRIVER_NAME_EMPTY"),
  literal("DELIVERY_VEHICLE_GENRE_EMPTY"),
  literal("DELIVERY_VEHICLE_REGISTRATION_PLATE_EMPTY"),
  literal("DELIVERY_TPL_NAME_EMPTY"),
  literal("DELIVERY_TRACKING_NUMBER_EMPTY"),
  literal("DELIVERY_BY_SELLER_EMPTY"),
  literal("DELIVERY_BY_TPL_EMPTY"),
  literal("RECEIVE_DATE_NOT_SET"),
  literal("SUPPLY_TYPE_NOT_SUPPORTED"),
  literal("INVALID_BUSINESS_FLOW"),
  literal("ORDER_LOCKED"),
  literal("INVALID_TIMESLOT"),
  literal("DROP_OFF_DETAILS_EMPTY"),
  literal("PICK_UP_ADDRESS_IS_EMPTY"),
  literal("PICK_UP_SENDER_NAME_IS_EMPTY"),
  literal("PICK_UP_SENDER_PHONE_IS_EMPTY"),
  literal("PICK_UP_ADDRESS_IS_TOO_LARGE"),
  literal("PICK_UP_SENDER_NAME_IS_TOO_LARGE"),
  literal("PICK_UP_SENDER_PHONE_IS_TOO_LARGE"),
  literal("PICK_UP_COMMENT_IS_TOO_LARGE"),
  literal("PICK_UP_DETAILS_EMPTY"),
  literal("DROP_OFF_ADDRESS_NOT_SET"),
  literal("INVALID_STATE"),
]);

export const fbpOrderMutationResponseSchema = object({
  error: object({
    order_errors: array(fbpOrderValidationErrorTypeSchema).optional(),
  }).optional(),
  is_error: boolean().optional(),
  row_version: integerSchema.optional(),
});

export const fbpOrderAttentionReasonSchema = union([
  literal("ORDER_ATTENTION_TYPE_UNSPECIFIED"),
  literal("OLD"),
  literal("TIME_SLOT_EXPIRED"),
]);

export const fbpOrderStatusSchema = union([
  literal("ORDER_STATUS_UNSPECIFIED"),
  literal("READY_TO_SUPPLY"),
  literal("FILLING_DELIVERY_DETAILS"),
  literal("COURIER_ASSIGNED"),
  literal("COURIER_PICKED_UP"),
  literal("ACCEPTANCE_AT_DROP_OFF_POINT"),
  literal("IN_TRANSIT_TO_STORAGE_WAREHOUSE"),
  literal("ACCEPTANCE_AT_STORAGE_WAREHOUSE"),
  literal("CANCELLED"),
]);

export const fbpOrderBundleSummarySchema = object({
  rounded_total_volume_in_litres: number().optional(),
  total_item_count: integerSchema.optional(),
  total_quantity: integerSchema.optional(),
});

export const fbpOrderDetailsSchema = object({
  attention_reasons: array(fbpOrderAttentionReasonSchema).optional(),
  bundle_summary: fbpOrderBundleSummarySchema.optional(),
  bundle_uuid: string().optional(),
  can_be_cancelled: boolean().optional(),
  cancellation_state: fbpCancellationStateSchema.optional(),
  created_date: rfc3339DateTimeSchema.optional(),
  delivery_details: fbpArchiveDeliveryDetailsSchema.optional(),
  draft_id: integerSchema.optional(),
  has_consignment_note: boolean().optional(),
  has_label: boolean().optional(),
  id: integerSchema.optional(),
  locked: boolean().optional(),
  order_number: string().optional(),
  package_units_count: integerSchema.optional(),
  receive_date: rfc3339DateTimeSchema.optional(),
  row_version: integerSchema.optional(),
  status: fbpOrderStatusSchema.optional(),
  supply_id: string().optional(),
  warehouse_id: integerSchema.optional(),
});
