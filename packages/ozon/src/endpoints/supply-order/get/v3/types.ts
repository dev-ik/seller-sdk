import type {
  OzonSupplyOrderState,
  OzonSupplyOrderTimeslot,
} from "../../shared/types.js";

export interface GetSupplyOrdersV3Request {
  /**
   * Идентификаторы заявок на поставку.
   *
   * Максимум элементов: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_ids: readonly string[];
}
export interface OzonSupplyOrderWarehouse {
  readonly address?: string;
  readonly name?: string;
  readonly warehouse_id?: number;
}
export interface OzonSupplyOrderTags {
  readonly is_econom?: boolean;
  readonly is_pickup?: boolean;
  readonly is_quant?: boolean;
  readonly is_super_fbo?: boolean;
  readonly is_virtual?: boolean;
  readonly product_super_fbo?: boolean;
  readonly original_supply_id?: number;
  readonly seller_warehouse_id?: number;
}
export interface OzonSupplyOrderSupplyTags {
  readonly freeze_stock_for_marking?: boolean;
  readonly is_ettn_required?: boolean;
  readonly is_evsd_required?: boolean;
  readonly is_jewelry?: boolean;
  readonly is_marking_possible?: boolean;
  readonly is_marking_required?: boolean;
  readonly is_utd?: boolean;
}
export interface OzonSupplyOrderStorageWarehouse
  extends OzonSupplyOrderWarehouse {
  readonly arrival_date?: string;
}
export interface OzonSupplyOrderSupply {
  readonly is_crossdock?: boolean;
  readonly macrolocal_cluster_id?: number;
  readonly bundle_id?: string;
  readonly state?: OzonSupplyOrderState;
  readonly storage_warehouse?: OzonSupplyOrderStorageWarehouse;
  readonly supply_id?: number;
  readonly supply_tags?: OzonSupplyOrderSupplyTags;
}
export interface OzonSupplyOrderTimezoneInfo {
  readonly iana_name?: string;
  readonly offset?: string;
}
export interface OzonSupplyOrderTimeslotInfo {
  readonly timeslot?: OzonSupplyOrderTimeslot;
  readonly timezone_info?: OzonSupplyOrderTimezoneInfo;
}
export interface OzonSupplyOrder {
  readonly created_date?: string;
  readonly data_filling_deadline_utc?: string;
  readonly dropoff_warehouse?: OzonSupplyOrderWarehouse;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly order_tags?: OzonSupplyOrderTags;
  readonly state?: OzonSupplyOrderState;
  readonly state_updated_date?: string;
  readonly supplies?: readonly OzonSupplyOrderSupply[];
  readonly timeslot?: OzonSupplyOrderTimeslotInfo;
}
export interface GetSupplyOrdersV3Response {
  readonly orders?: readonly OzonSupplyOrder[];
}
