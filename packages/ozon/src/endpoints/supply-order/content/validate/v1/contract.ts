import {
  array,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { ValidateSupplyOrderContentResponse } from "./types.js";
const lit = <const T extends string>(values: readonly [T, ...T[]]) =>
  union([
    literal(values[0]),
    ...values.slice(1).map((value) => literal(value)),
  ]);
const editing = lit([
  "UNSPECIFIED",
  "UNKNOWN",
  "INCORRECT_SUPPLY_STATE",
  "DEADLINE",
  "UTD_IS_UPLOADED",
  "STORAGE_WAREHOUSE_IS_NOT_WMS",
  "CONTRACT_IS_NOT_VALID_FOR_HANDLING_ORDERS",
  "SUPPLY_IS_VIRTUAL",
  "SUPPLY_DOES_NOT_BELONG_TO_COMPANY",
  "ASSORTMENT_REJECTION_REASON_CORRUPTED_ASSORTMENT",
  "ASSORTMENT_REJECTION_REASON_STORAGE_BELARUS_SKU_HAS_NO_ANY_FEACN",
  "ASSORTMENT_REJECTION_REASON_STORAGE_BELARUS_SKU_HAS_NO_SELLER_FEACN",
  "ASSORTMENT_REJECTION_REASON_TRACEABLE_SKU_HAS_NO_GTIN_BARCODE",
  "ASSORTMENT_REJECTION_REASON_TRACEABLE_SKU_HAS_NO_MEASUREMENT_UNIT_QUANTITY",
]);
const rejection = lit([
  "UNSPECIFIED",
  "UNKNOWN",
  "OUT_OF_ASSORTMENT",
  "INVALID",
  "INCOMPATIBLE_WAREHOUSE",
  "EMPTY_BARCODE",
  "EMPTY_PS_ATTRIBUTE",
  "MULTIPLICITY",
  "NO_PRICE",
  "INVALID_ITEM_COUNT_MAX",
  "INVALID_ITEM_COUNT_ZERO",
  "INCOMPATIBLE_SHIPMENT_TYPE",
  "ECONOM_QUANT_IS_NOT_FROZEN",
  "QUANTITY_NOT_MULTIPLE_BY_QUANT",
  "INVALID_QUANT_VALUE",
  "JEWELRY_FORBIDDEN_FOR_ECONOM",
  "NON_UNIQUE_ECONOM_ITEM_IN_REQUEST",
  "NON_UNIQUE_ECONOM_ITEM_IN_DESTINATION_BUNDLE",
  "SKU_REJECTED_BY_ACCEPTANCE_RESTRICTIONS",
  "SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED",
  "SKU_WITHOUT_ETTN_REQUIRED_TAG_NOT_ALLOWED",
  "SKU_WITH_TRACEABLE_TAG_NOT_ALLOWED",
  "EMPTY_CLUSTER",
  "SKU_IS_RESTRICTED",
  "SKU_WITH_UTD_REQUIRED_TAG_NOT_ALLOWED",
]);
const restriction = lit([
  "UNKNOWN",
  "SKU_HAS_NO_SALES",
  "SKU_HAS_QUANTITY_LIMIT",
]);
const approved = object({
  barcode: string().optional(),
  item_link: string().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  origin_quantity: integerSchema.optional(),
  origin_total_volume_in_litres: number().optional(),
  quant: integerSchema.optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
  sku_quantity_limit: integerSchema.optional(),
  total_volume_in_litres: number().optional(),
});
const rejected = object({
  barcode: string().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  origin_quantity: integerSchema.optional(),
  origin_total_volume_in_litres: number().optional(),
  quantity: integerSchema.optional(),
  rejection_reason: array(rejection).optional(),
  restrictions: object({
    reasons_restrictions: array(restriction).optional(),
    sku_has_no_sales_in_days: integerSchema.optional(),
    sku_quantity_limit: integerSchema.optional(),
  }).optional(),
  sku: integerSchema.optional(),
  total_volume_in_litres: number().optional(),
});
export const validateSupplyOrderContentResponseSchema: Schema<ValidateSupplyOrderContentResponse> =
  object({
    editing_errors: array(editing).optional(),
    validated_assortment: object({
      approved_items: array(approved).optional(),
      rejected_items: array(rejected).optional(),
      total_approved_item_count: integerSchema.optional(),
      total_approved_quantity: integerSchema.optional(),
      total_approved_volume_in_litres: number().optional(),
      total_rejected_item_count: integerSchema.optional(),
      total_restricted_item_count: integerSchema.optional(),
    }).optional(),
  });
