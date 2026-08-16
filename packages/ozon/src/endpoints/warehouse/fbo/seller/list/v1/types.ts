export type OzonFboSellerWarehouseWorkingDay =
  | "UNSPECIFIED"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
export interface OzonFboSellerWarehouseAddress {
  readonly address?: string;
  readonly city?: string;
  readonly coordinates?: {
    readonly latitude?: number;
    readonly longitude?: number;
  };
  readonly country_code?: string;
  readonly macrolocal_cluster_id?: number;
  readonly region?: string;
  readonly timezone?: string;
}
export interface OzonFboSellerWarehouse {
  readonly address?: OzonFboSellerWarehouseAddress;
  readonly contacts?: { readonly phone_numbers?: readonly string[] };
  readonly courier_comment?: string;
  readonly is_active?: boolean;
  readonly is_pickup?: boolean;
  readonly seller_warehouse_id?: number;
  readonly seller_warehouse_name?: string;
  readonly working_days?: readonly {
    readonly day?: OzonFboSellerWarehouseWorkingDay;
    readonly time_from_local?: string;
    readonly time_to_local?: string;
  }[];
}
export interface ListFboSellerWarehousesResponse {
  readonly warehouses?: readonly OzonFboSellerWarehouse[];
}
