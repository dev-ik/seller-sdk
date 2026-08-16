export interface GetCargoesV2Request {
  /**
   * Информация о поставках.
   *
   * Максимум элементов: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supplies: readonly {
    /**
     * Идентификаторы грузомест.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly cargo_ids: readonly string[];

    /**
     * Идентификатор поставки.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly supply_id: number;
  }[];
}
export type OzonFboCargoTrackingType =
  | "UNSPECIFIED"
  | "EXPECTED_ARRIVAL"
  | "ACTUAL_ARRIVAL";
export interface OzonCargoArrival {
  readonly date?: string;
  readonly timezone_info?: {
    readonly iana_name?: string;
    readonly offset?: number;
  };
  readonly timezone?: { readonly iana_name?: string; readonly offset?: number };
}
export interface GetCargoesV2Response {
  readonly supplies?: readonly {
    readonly bundle_id?: string;
    readonly cargoes_bundle_id?: string;
    readonly supply_id?: number;
    readonly limits?: {
      readonly max_box_count?: number;
      readonly max_box_sku_count?: number;
      readonly max_pallet_count?: number;
      readonly max_transport_pallet_count?: number;
    };
    readonly cargoes?: readonly {
      readonly bundle_id?: string;
      readonly cargo_id?: number;
      readonly content_type?: "UNSPECIFIED" | "MONO" | "MIX" | "NONE";
      readonly placement_zone_type?:
        | "UNSPECIFIED"
        | "UNDEFINED"
        | "TYPE_SINGLE"
        | "MULTI";
      readonly tracking_info?: {
        readonly arrival_at?: OzonCargoArrival;
        readonly status?:
          | "UNSPECIFIED"
          | "READY_TO_SUPPLY"
          | "REFUSED"
          | "ON_WAREHOUSE"
          | "NOT_DELIVERED"
          | "ACCEPTING"
          | "PROCESSED"
          | "ON_POINT_SHIPMENT"
          | "ON_TRANSIT_WAREHOUSE"
          | "LOST"
          | "CREATED"
          | "DELETED"
          | "DECLARED_IN_TRANSPORT_CARGO";
        readonly type?: OzonFboCargoTrackingType;
      };
      readonly transport_cargo_id?: number;
      readonly type?: "UNSPECIFIED" | "BOX" | "PALLET";
    }[];
    readonly transport_cargoes?: readonly {
      readonly box_count?: number;
      readonly summary_bundle_id?: string;
      readonly tracking_info?: {
        readonly arrival_at?: OzonCargoArrival;
        readonly status?:
          | "UNSPECIFIED"
          | "READY_TO_SUPPLY"
          | "REFUSED"
          | "ON_WAREHOUSE"
          | "NOT_DELIVERED"
          | "ON_POINT_SHIPMENT"
          | "ON_TRANSIT_WAREHOUSE"
          | "LOST"
          | "CREATED"
          | "CARGO_DISASSEMBLED";
        readonly type?: OzonFboCargoTrackingType;
      };
      readonly transport_cargo_id?: number;
      readonly type?: "UNSPECIFIED" | "PALLET";
    }[];
  }[];
}
