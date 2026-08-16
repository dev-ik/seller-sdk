import {
  array,
  boolean,
  literal,
  object,
  string,
  union,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
const cargoType = union([literal("BOX"), literal("PALLET")]);
const createReason = union([
  literal("INVALID_STATE"),
  literal("VALIDATION_FAILED"),
  literal("WAREHOUSE_LIMITS_EXCEED"),
  literal("SUPPLY_NOT_BELONG_CONTRACTOR"),
  literal("SUPPLY_NOT_BELONG_COMPANY"),
  literal("IS_FINALIZED"),
  literal("SKU_DISTRIBUTION_DISABLED"),
  literal("SUPPLY_IS_NOT_EMPTY"),
  literal("OPERATION_NOT_FOUND"),
  literal("OPERATION_FAILED"),
]);
const createReasonV2 = union([
  literal("ERROR_REASON_UNSPECIFIED"),
  createReason,
]);
const itemError = union([
  literal("SUPPLY_ITEM_NOT_FOUND"),
  literal("DUPLICATED_SUPPLY_ITEM"),
  literal("BEFORE_DEADLINE"),
  literal("SAME_BARCODES"),
  literal("SAME_ARTICLES"),
  literal("NOT_UNIQUE_SKU_BY_PRODUCT"),
  literal("QUANTITY_NOT_DIVISIBLE_BY_QUANT"),
  literal("NOT_SINGLE_PALLET_SKU_IN_PALLET_CARGO"),
  literal("NOT_ONE_QUANT_PALLET_SKU"),
  literal("NOT_ECONOM_SKU"),
  literal("QUANTITY_LESS_ONE"),
  literal("SUPPLY_ITEM_WITH_QUANT_NOT_FOUND"),
]);
const itemValidation = object({
  barcode: string().optional(),
  cargo_key: string().optional(),
  item: string().optional(),
  quant: integerSchema.optional(),
  type: itemError.optional(),
});
export const cargoCreateErrorsSchema = object({
  error_reasons: array(createReason).optional(),
  items_validation: array(itemValidation).optional(),
});
export const cargoCreateErrorsV2Schema = object({
  error_reasons: array(createReasonV2).optional(),
  items_validation: array(itemValidation).optional(),
});
const contentType = union([
  literal("UNSPECIFIED"),
  literal("MONO"),
  literal("MIX"),
  literal("NONE"),
]);
const zone = union([
  literal("UNSPECIFIED"),
  literal("UNDEFINED"),
  literal("SINGLE"),
  literal("MULTI"),
]);
const trackingStatus = union([
  literal("UNSPECIFIED"),
  literal("READY_TO_SUPPLY"),
  literal("REFUSED"),
  literal("ON_WAREHOUSE"),
  literal("NOT_DELIVERED"),
  literal("ACCEPTING"),
  literal("PROCESSED"),
  literal("ON_POINT_SHIPMENT"),
  literal("ON_TRANSIT_WAREHOUSE"),
  literal("LOST"),
  literal("CREATED"),
  literal("DELETED"),
]);
const trackingType = union([
  literal("UNSPECIFIED"),
  literal("EXPECTED_ARRIVAL"),
  literal("ACTUAL_ARRIVAL"),
]);
export const supplyCargoSchema = object({
  bundle_id: string().optional(),
  cargo_id: integerSchema.optional(),
  content_type: contentType.optional(),
  placement_zone_type: zone.optional(),
  tracking_info: object({
    date: rfc3339DateTimeSchema.optional(),
    status: trackingStatus.optional(),
    type: trackingType.optional(),
  }).optional(),
  type: union([literal("UNSPECIFIED"), cargoType]).optional(),
});
const supplyDeleteReason = union([
  literal("SUPPLY_NOT_FOUND"),
  literal("CANT_DELETE_ALL_CARGOES"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_THE_CONTRACTOR"),
  literal("SUPPLY_DOES_NOT_BELONG_TO_THE_COMPANY"),
  literal("SUPPLY_CARGOES_IS_FINALIZED"),
  literal("SUPPLY_CARGOES_LOCKED"),
  literal("OPERATION_NOT_FOUND"),
]);
export const cargoDeleteErrorSchema = object({
  cargo_error_reasons: array(
    object({
      cargo_id: integerSchema.optional(),
      error_reasons: array(literal("CARGO_NOT_FOUND")).optional(),
    }),
  ).optional(),
  supply_error_reasons: array(supplyDeleteReason).optional(),
});
const ruleState = {
  is_applicable: boolean().optional(),
  is_required: boolean().optional(),
  satisfied: boolean().optional(),
};
export const cargoRulesCheckSchema = object({
  supply_id: integerSchema.optional(),
  cargoes_presents_rule: object({
    cargo_count_per_type: array(
      object({ count: integerSchema.optional(), type: cargoType.optional() }),
    ).optional(),
    count: integerSchema.optional(),
    satisfied: boolean().optional(),
  }).optional(),
  edit_deadline_expire_rule: object(ruleState).optional(),
  expire_dates_presented_rule: object({
    ...ruleState,
    count_sku_with_expiration: integerSchema.optional(),
    count_sku_with_expiration_filled: integerSchema.optional(),
  }).optional(),
  is_valid_distribution_rule: object({
    ...ruleState,
    count_distributed_sku: integerSchema.optional(),
    count_sku_total: integerSchema.optional(),
    percents_int: integerSchema.optional(),
  }).optional(),
  package_units_with_distribution_rule: object({
    ...ruleState,
    count_all: integerSchema.optional(),
    count_with_distribution: integerSchema.optional(),
  }).optional(),
  placement_zones_rule: object({
    ...ruleState,
    count_cargoes_all: integerSchema.optional(),
    count_cargoes_with_mono_placement_zone: integerSchema.optional(),
  }).optional(),
});
const labelReason = union([
  literal("INVALID_STATE"),
  literal("OPERATION_NOT_FOUND"),
  literal("OPERATION_FAILED"),
  literal("SUPPLY_NOT_BELONG_CONTRACTOR"),
  literal("SUPPLY_NOT_BELONG_COMPANY"),
  literal("SUPPLY_IS_EMPTY"),
  literal("CARGOES_NOT_FOUND"),
]);
export const cargoLabelErrorsSchema = object({
  error_reasons: array(labelReason).optional(),
});
