import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { CreateSupplyDraftResponse } from "./types.js";
const message = union([
  literal("UNSPECIFIED"),
  literal("EMPTY_ITEMS_LIST"),
  literal("ITEMS_COUNT_MORE_THAN_MAX"),
  literal("UNKNOWN_CLUSTER_IDS"),
  literal("ITEMS_VALIDATION"),
  literal("DROP_OFF_POINT_DOES_NOT_EXIST"),
  literal("DROP_OFF_POINT_HAS_NO_TIMESLOTS"),
  literal("TOTAL_VOLUME_IN_LITRES_INVALID"),
  literal("SKU_DISTRIBUTION_REQUIRED_BUT_NOT_POSSIBLE"),
  literal("CROSS_DOCK_IN_DELIVERY_POINT_DISABLED_FOR_SELLER"),
  literal("DUPLICATE_SKUS_IN_REQUEST"),
  literal("CAN_NOT_CREATE_DRAFT"),
  literal("DRAFT_TOTALS_INVALID_ERROR"),
  literal("CAN_NOT_START_CALCULATION"),
  literal("PICKUP_IS_NOT_AVAILABLE"),
  literal("DROP_OFF_NOT_COMPATIBLE_WITH_PICKUP"),
  literal("UNDEFINED"),
]);
const errorReason = union([
  literal("UNSPECIFIED"),
  literal("ORDER_CREATION_NOT_AVAILABLE_FOR_SELLER"),
  literal("ALL_ITEMS_REJECTED"),
  literal("NOT_AVAILABLE_CLUSTERS"),
  literal("ALL_ITEMS_COUNT_INVALID"),
  literal("ALL_ITEMS_VOLUME_INVALID"),
  literal("ALL_BUNDLES_EMPTY"),
  literal("HAS_EMPTY_BUNDLE"),
  literal("DISABLED_FOR_SELLER"),
  literal("NO_ACTIVE_SELLER_WAREHOUSE"),
  literal("INVALID_SELLER_WAREHOUSE"),
  literal("UNDEFINED"),
]);
const rejectedReason = union([
  literal("UNSPECIFIED"),
  literal("OUT_OF_ASSORTMENT"),
  literal("INVALID"),
  literal("INCOMPATIBLE_WAREHOUSE"),
  literal("EMPTY_BARCODE"),
  literal("EMPTY_PS_ATTRIBUTE"),
  literal("MULTIPLICITY"),
  literal("NO_PRICE"),
  literal("INVALID_ITEM_COUNT_MAX"),
  literal("INVALID_ITEM_COUNT_ZERO"),
  literal("SKU_REJECTED_BY_ACCEPTANCE_RESTRICTIONS"),
  literal("SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED"),
  literal("SKU_WITHOUT_ETTN_REQUIRED_TAG_NOT_ALLOWED"),
  literal("SKU_WITH_TRACEABLE_TAG_NOT_ALLOWED"),
  literal("SKU_IS_RESTRICTED"),
  literal("EMPTY_CLUSTER"),
  literal("SKU_WITH_UTD_REQUIRED_TAG_NOT_ALLOWED"),
  literal("CORRUPTED_ASSORTMENT"),
  literal("STORAGE_BELARUS_SKU_HAS_NO_ANY_FEACN"),
  literal("STORAGE_BELARUS_SKU_HAS_NO_SELLER_FEACN"),
  literal("TRACEABLE_SKU_HAS_NO_GTIN_BARCODE"),
  literal("TRACEABLE_SKU_HAS_NO_MEASUREMENT_UNIT_QUANTITY"),
  literal("SKU_HAS_INVALID_HS_CODE"),
  literal("SKU_HAS_STORAGE_COUNTRY_RESTRICTIONS"),
  literal("UNDEFINED"),
]);
const rejectedItem = object({
  reasons: array(rejectedReason).optional(),
  sku: integerSchema.optional(),
});
const validation = object({
  macrolocal_cluster_id: integerSchema.optional(),
  rejected_items: array(rejectedItem).optional(),
});
const error = object({
  error_message: message.optional(),
  error_reasons: array(errorReason).optional(),
  items_validation: array(validation).optional(),
  macrolocal_cluster_ids: array(string()).optional(),
  message: string().optional(),
  skus: array(string()).optional(),
});
export const createSupplyDraftResponseSchema: Schema<CreateSupplyDraftResponse> =
  object({
    draft_id: integerSchema.optional(),
    errors: array(error).optional(),
  });
