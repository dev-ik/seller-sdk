import type {
  OzonSupplyOrderState,
  OzonSupplyOrderTimeslot,
  OzonSupplyOrderTimezone,
} from "../../../shared/types.js";
export interface GetSupplyOrderDetailsRequest {
  /**
   * Идентификатор заявки на поставку.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_id: number;
}
export type OzonSupplyCancellationForbiddenReason =
  | "UNSPECIFIED"
  | "INVALID_SUPPLY_STATE"
  | "SUPPLY_IS_VIRTUAL"
  | "SUPPLY_HAS_ACTIVE_UTD"
  | "SUPPLY_DOES_NOT_BELONG_TO_COMPANY"
  | "PICKUP_SUPPLY_IS_LOCKED_DOWN"
  | "UNDEFINED";
export type OzonSupplyContentEditForbiddenReason =
  | "UNSPECIFIED"
  | "INCORRECT_SUPPLY_STATE"
  | "DEADLINE"
  | "UTD_IS_UPLOADED"
  | "STORAGE_WAREHOUSE_IS_NOT_WMS"
  | "CONTRACT_IS_NOT_VALID_FOR_HANDLING_ORDERS"
  | "SUPPLY_IS_VIRTUAL"
  | "SUPPLY_DOES_NOT_BELONG_TO_COMPANY"
  | "UNDEFINED";
export type OzonSupplyOverdueReason =
  | "UNSPECIFIED"
  | "ORDER_TIMESLOT_EXPIRED"
  | "ORDER_TIMESLOT_NOT_SELECTED"
  | "NOT_READY_FOR_PICKUP"
  | "PICKUP_FAILED"
  | "UNDEFINED";
export type OzonSupplyState =
  | "UNSPECIFIED"
  | "DATA_FILLING"
  | "READY_TO_SUPPLY"
  | "ACCEPTED_AT_SUPPLY_WAREHOUSE"
  | "REJECTED_AT_SUPPLY_WAREHOUSE"
  | "IN_TRANSIT"
  | "ACCEPTED_AT_STORAGE_WAREHOUSE"
  | "REPORTS_CONFIRMATION_AWAITING"
  | "REPORT_REJECTED"
  | "COMPLETED"
  | "CANCELLED"
  | "OVERDUE";
export type OzonSupplyTimeslotForbiddenReason =
  | "UNSPECIFIED"
  | "INVALID_ORDER_STATE"
  | "ORDER_IS_VIRTUAL"
  | "SET_TIMESLOT_DEADLINE_EXCEED"
  | "ORDER_DOES_NOT_BELONG_TO_COMPANY"
  | "UNDEFINED";
export type OzonSupplyVehicleForbiddenReason =
  | "UNSPECIFIED"
  | "INVALID_ORDER_STATE"
  | "VEHICLE_NOT_REQUIRED"
  | "ORDER_DOES_NOT_BELONG_TO_COMPANY"
  | "UNDEFINED";
export interface OzonSupplyOrderDetailsTags {
  readonly is_econom?: boolean;
  readonly is_super_fbo?: boolean;
  readonly is_virtual?: boolean;
  readonly original_supply_id?: number;
  readonly product_super_fbo?: boolean;
}
export interface OzonSupplyCancellationAllowability {
  readonly can_not_set_reasons?: readonly OzonSupplyCancellationForbiddenReason[];
  readonly can_set?: boolean;
}
export interface OzonSupplyContent {
  readonly bundle_id?: string;
  readonly can_not_set_reasons?: readonly OzonSupplyContentEditForbiddenReason[];
  readonly can_set?: boolean;
}
export interface OzonSupplyEttnInfo {
  readonly contains_valid?: boolean;
  readonly is_required?: boolean;
  readonly is_uploaded?: boolean;
}
export interface OzonSupplyStorageWarehouse {
  readonly address?: string;
  readonly arrival_date?: string;
  readonly name?: string;
  readonly warehouse_id?: number;
}
export interface OzonSupplyTags {
  readonly is_ettn_required?: boolean;
  readonly is_evsd_required?: boolean;
  readonly is_jewelry?: boolean;
  readonly is_marking_possible?: boolean;
  readonly is_marking_required?: boolean;
  readonly is_utd?: boolean;
}
export interface OzonSupplyOrderDetailsSupply {
  readonly cancellation_allowability?: OzonSupplyCancellationAllowability;
  readonly content?: OzonSupplyContent;
  readonly ettn_info?: OzonSupplyEttnInfo;
  readonly is_crossdock?: boolean;
  readonly overdue_reason?: OzonSupplyOverdueReason;
  readonly storage_warehouse?: OzonSupplyStorageWarehouse;
  readonly macrolocal_cluster_id?: number;
  readonly supply_id?: number;
  readonly supply_state?: OzonSupplyState;
  readonly supply_tags?: OzonSupplyTags;
}
export interface OzonSupplyOrderDetailsTimeslotValue {
  readonly timeslot?: OzonSupplyOrderTimeslot;
  readonly timezone_info?: OzonSupplyOrderTimezone;
}
export interface OzonSupplyOrderDetailsTimeslot {
  readonly can_not_set_reasons?: readonly OzonSupplyTimeslotForbiddenReason[];
  readonly can_set?: boolean;
  readonly value?: OzonSupplyOrderDetailsTimeslotValue;
}
export interface OzonSupplyOrderVehicleValue {
  readonly driver_is_deleted?: boolean;
  readonly driver_name?: string;
  readonly driver_phone?: string;
  readonly vehicle_is_deleted?: boolean;
  readonly vehicle_model?: string;
  readonly vehicle_number?: string;
}
export interface OzonSupplyOrderVehicle {
  readonly can_not_set_reasons?: readonly OzonSupplyVehicleForbiddenReason[];
  readonly can_set?: boolean;
  readonly value?: OzonSupplyOrderVehicleValue;
}
export interface GetSupplyOrderDetailsResponse {
  readonly created_date?: string;
  readonly data_filling_deadline_utc?: string;
  readonly dropoff_warehouse_id?: number;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly order_tags?: OzonSupplyOrderDetailsTags;
  readonly state?: OzonSupplyOrderState;
  readonly state_updated_date?: string;
  readonly supplies?: readonly OzonSupplyOrderDetailsSupply[];
  readonly timeslot?: OzonSupplyOrderDetailsTimeslot;
  readonly vehicle?: OzonSupplyOrderVehicle;
}
