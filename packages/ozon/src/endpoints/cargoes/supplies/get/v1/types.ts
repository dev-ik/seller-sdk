export interface GetSupplyCargoesV1Request {
  /**
   * Список идентификаторов поставок.
   *
   * Максимум элементов: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_ids: readonly string[];
}
export interface GetSupplyCargoesV1Response {
  readonly not_found_supply_ids?: readonly string[];
  readonly supplies_cargoes?: readonly {
    readonly bundle_id?: string;
    readonly cargoes_without_transport_cargoes?: readonly {
      readonly barcode?: string;
      readonly bundle_id?: string;
      readonly cargo_id?: number;
    }[];
    readonly supply_id?: number;
    readonly transport_cargoes?: readonly {
      readonly bundle_id?: string;
      readonly cargoes?: readonly {
        readonly barcode?: string;
        readonly bundle_id?: string;
        readonly cargo_id?: number;
      }[];
      readonly transport_cargo_id?: number;
      readonly type?: "PALLET";
    }[];
  }[];
}
