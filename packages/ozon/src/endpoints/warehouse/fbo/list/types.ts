export type OzonFboSupplyType = "CREATE_TYPE_CROSSDOCK" | "CREATE_TYPE_DIRECT";

export type OzonFboSupplyWarehouseType =
  | "WAREHOUSE_TYPE_DELIVERY_POINT"
  | "WAREHOUSE_TYPE_ORDERS_RECEIVING_POINT"
  | "WAREHOUSE_TYPE_SORTING_CENTER"
  | "WAREHOUSE_TYPE_FULL_FILLMENT"
  | "WAREHOUSE_TYPE_CROSS_DOCK";

export interface ListFboSupplyWarehousesRequest {
  /**
   * Тип поставки: - `CREATE_TYPE_CROSSDOCK` — кросс-докинг, - `CREATE_TYPE_DIRECT` — прямая.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter_by_supply_type: readonly OzonFboSupplyType[];

  /**
   * Поиск по названию склада. Для поиска пунктов выдачи заказов укажите полное название.
   *
   * Минимальная длина: `4`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly search: string;
}

export interface OzonFboSupplyWarehouse {
  readonly address?: string;
  readonly coordinates?: {
    readonly latitude?: number;
    readonly longitude?: number;
  };
  readonly name?: string;
  readonly warehouse_id?: number;
  readonly warehouse_type?: OzonFboSupplyWarehouseType;
}

export interface ListFboSupplyWarehousesResponse {
  readonly search?: readonly OzonFboSupplyWarehouse[];
}
