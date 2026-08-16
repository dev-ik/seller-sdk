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
import type { GetSupplyDraftInfoResponse } from "./types.js";
const lit = <const T extends string>(values: readonly [T, ...T[]]) =>
  union([
    literal(values[0]),
    ...values.slice(1).map((value) => literal(value)),
  ]);
const status = lit(["UNSPECIFIED", "SUCCESS", "IN_PROGRESS", "FAILED"]);
const supplyType = lit(["CROSSDOCK", "DIRECT", "MULTI_CLUSTER"]);
const availabilityState = lit([
  "UNSPECIFIED",
  "FULL_AVAILABLE",
  "PARTIAL_AVAILABLE",
  "NOT_AVAILABLE",
]);
const invalidReason = lit([
  "UNSPECIFIED",
  "NO_REASON",
  "PARTIAL_MATRIX_AVAILABLE",
  "NOT_AVAILABLE_MATRIX",
  "NOT_AVAILABLE_RANK",
  "NOT_AVAILABLE_ROUTE",
  "NOT_AVAILABLE_TIMESLOT_FOR_DROP_OFF_POINT",
  "NOT_AVAILABLE_TIMESLOT_FOR_STORAGE_WAREHOUSE",
  "NOT_AVAILABLE_TIMESLOT_FOR_BOTH_WAREHOUSES",
  "NOT_AVAILABLE_TIMESLOT_NO_REASON",
]);
const tag = lit([
  "UNSPECIFIED",
  "TRACEABLE",
  "ETTN_REQUIRED",
  "EVSD_REQUIRED",
  "MARKING_REQUIRED",
  "MARKING_POSSIBLE",
  "JEWELRY",
  "FREEZE_STOCK_FOR_MARKING_AFTER_ACCEPTANCE",
  "UTD_REQUIRED",
  "UNDEFINED",
]);
const errorMessage = lit([
  "UNSPECIFIED",
  "EMPTY_ITEMS_LIST",
  "ITEMS_COUNT_MORE_THAN_MAX",
  "UNKNOWN_CLUSTER_IDS",
  "ITEMS_VALIDATION",
  "DROP_OFF_POINT_DOES_NOT_EXIST",
  "DROP_OFF_POINT_HAS_NO_TIMESLOTS",
  "TOTAL_VOLUME_IN_LITRES_INVALID",
  "SKU_DISTRIBUTION_REQUIRED_BUT_NOT_POSSIBLE",
  "CROSS_DOCK_IN_DELIVERY_POINT_DISABLED_FOR_SELLER",
  "DUPLICATE_SKUS_IN_REQUEST",
  "CAN_NOT_CREATE_DRAFT",
  "DRAFT_TOTALS_INVALID_ERROR",
  "CAN_NOT_START_CALCULATION",
  "PICKUP_IS_NOT_AVAILABLE",
  "DROP_OFF_NOT_COMPATIBLE_WITH_PICKUP",
  "UNDEFINED",
]);
const errorReason = lit([
  "UNSPECIFIED",
  "ORDER_CREATION_NOT_AVAILABLE_FOR_SELLER",
  "ALL_ITEMS_REJECTED",
  "NOT_AVAILABLE_CLUSTERS",
  "ALL_ITEMS_COUNT_INVALID",
  "ALL_ITEMS_VOLUME_INVALID",
  "ALL_BUNDLES_EMPTY",
  "HAS_EMPTY_BUNDLE",
  "DISABLED_FOR_SELLER",
  "NO_ACTIVE_SELLER_WAREHOUSE",
  "INVALID_SELLER_WAREHOUSE",
  "MINIMUM_VOLUME_IN_LITRES_INVALID",
  "UNDEFINED",
]);
const rejectedReason = lit([
  "UNSPECIFIED",
  "OUT_OF_ASSORTMENT",
  "INVALID",
  "INCOMPATIBLE_WAREHOUSE",
  "EMPTY_BARCODE",
  "EMPTY_PS_ATTRIBUTE",
  "MULTIPLICITY",
  "NO_PRICE",
  "INVALID_ITEM_COUNT_MAX",
  "INVALID_ITEM_COUNT_ZERO",
  "SKU_REJECTED_BY_ACCEPTANCE_RESTRICTIONS",
  "SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED",
  "SKU_WITHOUT_ETTN_REQUIRED_TAG_NOT_ALLOWED",
  "SKU_WITH_TRACEABLE_TAG_NOT_ALLOWED",
  "SKU_IS_RESTRICTED",
  "EMPTY_CLUSTER",
  "SKU_WITH_UTD_REQUIRED_TAG_NOT_ALLOWED",
  "CORRUPTED_ASSORTMENT",
  "STORAGE_BELARUS_SKU_HAS_NO_ANY_FEACN",
  "STORAGE_BELARUS_SKU_HAS_NO_SELLER_FEACN",
  "TRACEABLE_SKU_HAS_NO_GTIN_BARCODE",
  "TRACEABLE_SKU_HAS_NO_MEASUREMENT_UNIT_QUANTITY",
  "SKU_HAS_INVALID_HS_CODE",
  "SKU_HAS_STORAGE_COUNTRY_RESTRICTIONS",
  "UNDEFINED",
]);
const validation = object({
  macrolocal_cluster_id: integerSchema.optional(),
  rejected_items: array(
    object({
      reasons: array(rejectedReason).optional(),
      sku: integerSchema.optional(),
    }),
  ).optional(),
});
const warehouse = object({
  availability_status: object({
    invalid_reason: invalidReason.optional(),
    state: availabilityState.optional(),
  }).optional(),
  bundle_id: string().optional(),
  restricted_bundle_id: string().optional(),
  storage_warehouse: object({
    address: string().optional(),
    name: string().optional(),
    warehouse_id: integerSchema.optional(),
  }).optional(),
  supply_tags: array(tag).optional(),
  total_rank: integerSchema.optional(),
  total_score: number().optional(),
});
const cluster = object({
  cluster_name: string().optional(),
  macrolocal_cluster_id: integerSchema.optional(),
  supply_type: supplyType.optional(),
  warehouses: array(warehouse).optional(),
});
const error = object({
  error_message: errorMessage.optional(),
  error_reasons: array(errorReason).optional(),
  items_validation: array(validation).optional(),
  macrolocal_cluster_ids: array(string()).optional(),
  message: string().optional(),
  skus: array(string()).optional(),
});
export const getSupplyDraftInfoResponseSchema: Schema<GetSupplyDraftInfoResponse> =
  object({
    clusters: array(cluster).optional(),
    errors: array(error).optional(),
    status: status.optional(),
  });
