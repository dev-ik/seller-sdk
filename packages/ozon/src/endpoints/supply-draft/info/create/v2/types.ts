import type {
  OzonSupplyDraftErrorMessage,
  OzonSupplyDraftItemsValidation,
} from "../../../create/shared/types.js";
export type OzonSupplyDraftType = "CROSSDOCK" | "DIRECT" | "MULTI_CLUSTER";
export type OzonSupplyDraftInfoStatus =
  | "UNSPECIFIED"
  | "SUCCESS"
  | "IN_PROGRESS"
  | "FAILED";
export type OzonSupplyDraftWarehouseAvailabilityState =
  | "UNSPECIFIED"
  | "FULL_AVAILABLE"
  | "PARTIAL_AVAILABLE"
  | "NOT_AVAILABLE";
export type OzonSupplyDraftWarehouseInvalidReason =
  | "UNSPECIFIED"
  | "NO_REASON"
  | "PARTIAL_MATRIX_AVAILABLE"
  | "NOT_AVAILABLE_MATRIX"
  | "NOT_AVAILABLE_RANK"
  | "NOT_AVAILABLE_ROUTE"
  | "NOT_AVAILABLE_TIMESLOT_FOR_DROP_OFF_POINT"
  | "NOT_AVAILABLE_TIMESLOT_FOR_STORAGE_WAREHOUSE"
  | "NOT_AVAILABLE_TIMESLOT_FOR_BOTH_WAREHOUSES"
  | "NOT_AVAILABLE_TIMESLOT_NO_REASON";
export type OzonSupplyDraftWarehouseTag =
  | "UNSPECIFIED"
  | "TRACEABLE"
  | "ETTN_REQUIRED"
  | "EVSD_REQUIRED"
  | "MARKING_REQUIRED"
  | "MARKING_POSSIBLE"
  | "JEWELRY"
  | "FREEZE_STOCK_FOR_MARKING_AFTER_ACCEPTANCE"
  | "UTD_REQUIRED"
  | "UNDEFINED";
export type OzonSupplyDraftInfoErrorReason =
  | "UNSPECIFIED"
  | "ORDER_CREATION_NOT_AVAILABLE_FOR_SELLER"
  | "ALL_ITEMS_REJECTED"
  | "NOT_AVAILABLE_CLUSTERS"
  | "ALL_ITEMS_COUNT_INVALID"
  | "ALL_ITEMS_VOLUME_INVALID"
  | "ALL_BUNDLES_EMPTY"
  | "HAS_EMPTY_BUNDLE"
  | "DISABLED_FOR_SELLER"
  | "NO_ACTIVE_SELLER_WAREHOUSE"
  | "INVALID_SELLER_WAREHOUSE"
  | "MINIMUM_VOLUME_IN_LITRES_INVALID"
  | "UNDEFINED";
export interface GetSupplyDraftInfoRequest {
  /**
   * Идентификатор черновика из методов
   * [/v1/draft/crossdock/create](#operation/DraftCrossdockCreate),
   * [/v1/draft/direct/create](#operation/DraftDirectCreate) или
   * [/v1/draft/multi-cluster/create](#operation/DraftMultiClusterCreate).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly draft_id: number;
}
export interface OzonSupplyDraftStorageWarehouse {
  readonly address?: string;
  readonly name?: string;
  readonly warehouse_id?: number;
}
export interface OzonSupplyDraftWarehouseAvailability {
  readonly invalid_reason?: OzonSupplyDraftWarehouseInvalidReason;
  readonly state?: OzonSupplyDraftWarehouseAvailabilityState;
}
export interface OzonSupplyDraftWarehouse {
  readonly availability_status?: OzonSupplyDraftWarehouseAvailability;
  readonly bundle_id?: string;
  readonly restricted_bundle_id?: string;
  readonly storage_warehouse?: OzonSupplyDraftStorageWarehouse;
  readonly supply_tags?: readonly OzonSupplyDraftWarehouseTag[];
  readonly total_rank?: number;
  readonly total_score?: number;
}
export interface OzonSupplyDraftInfoCluster {
  readonly cluster_name?: string;
  readonly macrolocal_cluster_id?: number;
  readonly supply_type?: OzonSupplyDraftType;
  readonly warehouses?: readonly OzonSupplyDraftWarehouse[];
}
export interface OzonSupplyDraftInfoError {
  readonly error_message?: OzonSupplyDraftErrorMessage;
  readonly error_reasons?: readonly OzonSupplyDraftInfoErrorReason[];
  readonly items_validation?: readonly OzonSupplyDraftItemsValidation[];
  readonly macrolocal_cluster_ids?: readonly string[];
  readonly message?: string;
  readonly skus?: readonly string[];
}
export interface GetSupplyDraftInfoResponse {
  readonly clusters?: readonly OzonSupplyDraftInfoCluster[];
  readonly errors?: readonly OzonSupplyDraftInfoError[];
  readonly status?: OzonSupplyDraftInfoStatus;
}
