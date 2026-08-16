export type OzonSupplyContentEditingError =
  | "UNSPECIFIED"
  | "UNKNOWN"
  | "INCORRECT_SUPPLY_STATE"
  | "DEADLINE"
  | "UTD_IS_UPLOADED"
  | "STORAGE_WAREHOUSE_IS_NOT_WMS"
  | "CONTRACT_IS_NOT_VALID_FOR_HANDLING_ORDERS"
  | "SUPPLY_IS_VIRTUAL"
  | "SUPPLY_DOES_NOT_BELONG_TO_COMPANY"
  | "ASSORTMENT_REJECTION_REASON_CORRUPTED_ASSORTMENT"
  | "ASSORTMENT_REJECTION_REASON_STORAGE_BELARUS_SKU_HAS_NO_ANY_FEACN"
  | "ASSORTMENT_REJECTION_REASON_STORAGE_BELARUS_SKU_HAS_NO_SELLER_FEACN"
  | "ASSORTMENT_REJECTION_REASON_TRACEABLE_SKU_HAS_NO_GTIN_BARCODE"
  | "ASSORTMENT_REJECTION_REASON_TRACEABLE_SKU_HAS_NO_MEASUREMENT_UNIT_QUANTITY";
export type OzonSupplyContentRejectionReason =
  | "UNSPECIFIED"
  | "UNKNOWN"
  | "OUT_OF_ASSORTMENT"
  | "INVALID"
  | "INCOMPATIBLE_WAREHOUSE"
  | "EMPTY_BARCODE"
  | "EMPTY_PS_ATTRIBUTE"
  | "MULTIPLICITY"
  | "NO_PRICE"
  | "INVALID_ITEM_COUNT_MAX"
  | "INVALID_ITEM_COUNT_ZERO"
  | "INCOMPATIBLE_SHIPMENT_TYPE"
  | "ECONOM_QUANT_IS_NOT_FROZEN"
  | "QUANTITY_NOT_MULTIPLE_BY_QUANT"
  | "INVALID_QUANT_VALUE"
  | "JEWELRY_FORBIDDEN_FOR_ECONOM"
  | "NON_UNIQUE_ECONOM_ITEM_IN_REQUEST"
  | "NON_UNIQUE_ECONOM_ITEM_IN_DESTINATION_BUNDLE"
  | "SKU_REJECTED_BY_ACCEPTANCE_RESTRICTIONS"
  | "SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED"
  | "SKU_WITHOUT_ETTN_REQUIRED_TAG_NOT_ALLOWED"
  | "SKU_WITH_TRACEABLE_TAG_NOT_ALLOWED"
  | "EMPTY_CLUSTER"
  | "SKU_IS_RESTRICTED"
  | "SKU_WITH_UTD_REQUIRED_TAG_NOT_ALLOWED";
export type OzonSupplyContentRestrictionReason =
  | "UNKNOWN"
  | "SKU_HAS_NO_SALES"
  | "SKU_HAS_QUANTITY_LIMIT";
export interface ValidateSupplyOrderContentRequest {
  /**
   * Идентификатор нового товарного состава поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly new_bundle_id: string;

  /**
   * Идентификатор поставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;
}
export interface OzonApprovedSupplyContentItem {
  readonly barcode?: string;
  readonly item_link?: string;
  readonly name?: string;
  readonly offer_id?: string;
  readonly origin_quantity?: number;
  readonly origin_total_volume_in_litres?: number;
  readonly quant?: number;
  readonly quantity?: number;
  readonly sku?: number;
  readonly sku_quantity_limit?: number;
  readonly total_volume_in_litres?: number;
}
export interface OzonRejectedSupplyContentItem {
  readonly barcode?: string;
  readonly name?: string;
  readonly offer_id?: string;
  readonly origin_quantity?: number;
  readonly origin_total_volume_in_litres?: number;
  readonly quantity?: number;
  readonly rejection_reason?: readonly OzonSupplyContentRejectionReason[];
  readonly restrictions?: {
    readonly reasons_restrictions?: readonly OzonSupplyContentRestrictionReason[];
    readonly sku_has_no_sales_in_days?: number;
    readonly sku_quantity_limit?: number;
  };
  readonly sku?: number;
  readonly total_volume_in_litres?: number;
}
export interface OzonValidatedSupplyContent {
  readonly approved_items?: readonly OzonApprovedSupplyContentItem[];
  readonly rejected_items?: readonly OzonRejectedSupplyContentItem[];
  readonly total_approved_item_count?: number;
  readonly total_approved_quantity?: number;
  readonly total_approved_volume_in_litres?: number;
  readonly total_rejected_item_count?: number;
  readonly total_restricted_item_count?: number;
}
export interface ValidateSupplyOrderContentResponse {
  readonly editing_errors?: readonly OzonSupplyContentEditingError[];
  readonly validated_assortment?: OzonValidatedSupplyContent;
}
