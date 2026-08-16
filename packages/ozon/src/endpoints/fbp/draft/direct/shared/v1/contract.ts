import { literal, object, string, union } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
export const fbpDirectDraftResponseSchema = object({
  draft_id: integerSchema.optional(),
  row_version: integerSchema.optional(),
  supply_id: string().optional(),
});
export const fbpDraftValidationErrorSchema = union([
  literal("ERROR_TYPE_UNSPECIFIED"),
  literal("ORDER_DRAFT_LOCKED"),
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
  literal("INVALID_BUSINESS_FLOW"),
  literal("SUPPLY_TYPE_NOT_SUPPORTED"),
  literal("INVALID_STATE"),
]);
