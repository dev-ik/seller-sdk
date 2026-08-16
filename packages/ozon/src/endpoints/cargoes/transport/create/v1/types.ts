import type { OzonCargoTransportCreateError } from "../../../shared/v1/types.js";
export interface CreateTransportCargoesV1Request {
  /**
   * Идентификатор поставки. Получите значение параметра методом
   * [/v3/supply-order/get](#operation/SupplyOrderGet).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;

  /**
   * Количество транспортных грузомест по типам.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly transport_cargoes: readonly {
    /**
     * Количество транспортных грузомест.
     *
     * Формат: `int32`. Максимум: `40`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly count: number;

    /**
     * Тип транспортного грузоместа: `PALLET` — палета.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly type: "PALLET";
  }[];
}
export interface CreateTransportCargoesV1Response {
  readonly error_reasons?: readonly OzonCargoTransportCreateError[];
  readonly operation_id?: string;
}
