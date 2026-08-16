export type OzonSupplyClusterType = "CLUSTER_TYPE_OZON" | "CLUSTER_TYPE_CIS";
export type OzonSupplyClusterWarehouseType =
  | "FULL_FILLMENT"
  | "EXPRESS_DARK_STORE"
  | "SORTING_CENTER"
  | "ORDERS_RECEIVING_POINT"
  | "CROSS_DOCK"
  | "DISTRIBUTION_CENTER";
export interface ListSupplyClustersV1Request {
  /**
   * Тип кластера: - `CLUSTER_TYPE_OZON` — кластер в России, - `CLUSTER_TYPE_CIS` — кластер в СНГ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cluster_type: OzonSupplyClusterType;

  /**
   * Идентификаторы кластеров.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cluster_ids?: readonly string[];
}
export interface OzonSupplyClusterWarehouseV1 {
  readonly name?: string;
  readonly type?: OzonSupplyClusterWarehouseType;
  readonly warehouse_id?: number;
}
export interface OzonSupplyLogisticClusterV1 {
  readonly warehouses?: readonly OzonSupplyClusterWarehouseV1[];
}
export interface OzonSupplyClusterV1 {
  readonly id?: number;
  readonly logistic_clusters?: readonly OzonSupplyLogisticClusterV1[];
  readonly macrolocal_cluster_id?: number;
  readonly name?: string;
  readonly type?: OzonSupplyClusterType;
}
export interface ListSupplyClustersV1Response {
  readonly clusters?: readonly OzonSupplyClusterV1[];
}
