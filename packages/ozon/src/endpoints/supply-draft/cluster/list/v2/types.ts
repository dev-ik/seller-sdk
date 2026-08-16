export interface OzonSupplyClusterFulfillmentV2 {
  readonly name?: string;
  readonly warehouse_id?: number;
}
export interface OzonSupplyMacrolocalClusterCountry {
  readonly name?: string;
  readonly uid?: string;
}
export interface OzonSupplyMacrolocalClusterV2 {
  readonly country?: OzonSupplyMacrolocalClusterCountry;
  readonly name?: string;
}
export interface OzonSupplyClusterDataV2 {
  readonly fulfillments?: readonly OzonSupplyClusterFulfillmentV2[];
  readonly macrolocal_cluster?: OzonSupplyMacrolocalClusterV2;
}
export interface OzonSupplyClusterV2 {
  readonly data?: OzonSupplyClusterDataV2;
  readonly macrolocal_cluster_id?: number;
}
export interface ListSupplyClustersV2Response {
  readonly result?: readonly OzonSupplyClusterV2[];
}
