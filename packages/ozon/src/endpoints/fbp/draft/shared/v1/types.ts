export type OzonFbpCancellationErrorCode =
  | "CODE_UNSPECIFIED"
  | "NO_RESPONSE_FROM_3PF"
  | "ACCEPTANCE_ALREADY_STARTED";
export type OzonFbpCancellationStatus =
  | "STATUS_UNSPECIFIED"
  | "CONFIRMATION"
  | "CANCELED"
  | "NOT_CANCELED";
export interface OzonFbpCancellationState {
  readonly cancellation_error?: {
    readonly error_code?: OzonFbpCancellationErrorCode;
    readonly message?: string;
  };
  readonly cancellation_status?: OzonFbpCancellationStatus;
}
export interface OzonFbpDraftDeleteResponse {
  readonly cancellation_state?: OzonFbpCancellationState;
  readonly row_version?: number;
}

export type OzonFbpBundleItemError =
  | "BUNDLE_ITEM_ERROR_UNSPECIFIED"
  | "OUT_OF_ASSORTMENT"
  | "INVALID"
  | "INCOMPATIBLE_WAREHOUSE"
  | "INVALID_BARCODE"
  | "MULTIPLICITY"
  | "NO_PRICE"
  | "BANNED"
  | "DUPLICATE_ITEMS"
  | "ZERO_QUANTITY"
  | "QUANTITY_GREATER_THEN_MAX"
  | "NO_SALES"
  | "SURPLUS"
  | "AVAILABILITY_IS_EMPTY";
export type OzonFbpOrderError =
  | "ORDER_ERROR_TYPE_UNSPECIFIED"
  | "INVALID_NUMBER_OF_PACKAGE_UNITS"
  | "MAXIMUM_NUMBER_OF_UNIQUE_SKU_REACHED"
  | "MAXIMUM_BUNDLE_VOLUME_REACHED"
  | "BUNDLE_ID_EMPTY"
  | "INVALID_SUPPLY_TYPE"
  | "INVALID_TIMESLOT"
  | "INVALID_WHC_NUMBER"
  | "DRAFT_LOCKED"
  | "DROP_OFF_POINTS_IS_EMPTY"
  | "WAREHOUSE_IS_EMPTY"
  | "BUSINESS_FLOW_TYPE_IS_EMPTY"
  | "WAS_CANCELLED"
  | "PICK_UP_DETAILS_IS_EMPTY"
  | "INVALID_PICK_UP_DETAILS"
  | "INVALID_PICK_UP_DATE"
  | "INTERNAL_ERROR";
export interface OzonFbpDraftRegistrationResponse {
  readonly error?: {
    readonly bundle_errors?: readonly {
      readonly errors?: readonly OzonFbpBundleItemError[];
      readonly sku?: number;
    }[];
    readonly order_error?: OzonFbpOrderError;
  };
  readonly is_error?: boolean;
  readonly row_version?: number;
}
export interface OzonFbpDraftCreatedResponse {
  readonly draft_id?: number;
  readonly row_version?: number;
  readonly supply_id?: string;
}
