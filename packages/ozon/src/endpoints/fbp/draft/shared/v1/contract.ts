import {
  array,
  boolean,
  literal,
  object,
  string,
  union,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
export const fbpBundleItemErrorSchema = union([
  literal("BUNDLE_ITEM_ERROR_UNSPECIFIED"),
  literal("OUT_OF_ASSORTMENT"),
  literal("INVALID"),
  literal("INCOMPATIBLE_WAREHOUSE"),
  literal("INVALID_BARCODE"),
  literal("MULTIPLICITY"),
  literal("NO_PRICE"),
  literal("BANNED"),
  literal("DUPLICATE_ITEMS"),
  literal("ZERO_QUANTITY"),
  literal("QUANTITY_GREATER_THEN_MAX"),
  literal("NO_SALES"),
  literal("SURPLUS"),
  literal("AVAILABILITY_IS_EMPTY"),
]);
const orderError = union([
  literal("ORDER_ERROR_TYPE_UNSPECIFIED"),
  literal("INVALID_NUMBER_OF_PACKAGE_UNITS"),
  literal("MAXIMUM_NUMBER_OF_UNIQUE_SKU_REACHED"),
  literal("MAXIMUM_BUNDLE_VOLUME_REACHED"),
  literal("BUNDLE_ID_EMPTY"),
  literal("INVALID_SUPPLY_TYPE"),
  literal("INVALID_TIMESLOT"),
  literal("INVALID_WHC_NUMBER"),
  literal("DRAFT_LOCKED"),
  literal("DROP_OFF_POINTS_IS_EMPTY"),
  literal("WAREHOUSE_IS_EMPTY"),
  literal("BUSINESS_FLOW_TYPE_IS_EMPTY"),
  literal("WAS_CANCELLED"),
  literal("PICK_UP_DETAILS_IS_EMPTY"),
  literal("INVALID_PICK_UP_DETAILS"),
  literal("INVALID_PICK_UP_DATE"),
  literal("INTERNAL_ERROR"),
]);
export const fbpCancellationStateSchema = object({
  cancellation_error: object({
    error_code: union([
      literal("CODE_UNSPECIFIED"),
      literal("NO_RESPONSE_FROM_3PF"),
      literal("ACCEPTANCE_ALREADY_STARTED"),
    ]).optional(),
    message: string().optional(),
  }).optional(),
  cancellation_status: union([
    literal("STATUS_UNSPECIFIED"),
    literal("CONFIRMATION"),
    literal("CANCELED"),
    literal("NOT_CANCELED"),
  ]).optional(),
});
export const fbpDraftDeleteResponseSchema = object({
  cancellation_state: fbpCancellationStateSchema.optional(),
  row_version: integerSchema.optional(),
});
export const fbpDraftRegistrationResponseSchema = object({
  error: object({
    bundle_errors: array(
      object({
        errors: array(fbpBundleItemErrorSchema).optional(),
        sku: integerSchema.optional(),
      }),
    ).optional(),
    order_error: orderError.optional(),
  }).optional(),
  is_error: boolean().optional(),
  row_version: integerSchema.optional(),
});
export const fbpDraftCreatedResponseSchema = object({
  draft_id: integerSchema.optional(),
  row_version: integerSchema.optional(),
  supply_id: string().optional(),
});
