import type {
  OzonDropOffPoint,
  OzonDropOffPointType,
  OzonWarehouseCoordinates,
} from "../../../../shared/v1/types.js";

export interface ListDropOffPointsForWarehouseCreateV1Request {
  /**
   * Координаты.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly coordinates?: OzonWarehouseCoordinates;

  /**
   * Код страны в формате ISO 2.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly country_code: string;

  /**
   * `true`, если товар крупногабаритный.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_kgt: boolean;

  /**
   * Параметры поиска.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly search?: {
    /**
     * Адрес drop-off пункта.
     *
     * Максимальная длина: `1000`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly address?: string;

    /**
     * Тип drop-off пункта: - `PVZ` — пункт выдачи заказов; - `PPZ` — пункт приёма заказов; - `SC` —
     * сортировочный центр.
     *
     * Максимум элементов: `3`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly types?: readonly OzonDropOffPointType[];
  };
}

export interface ListDropOffPointsForWarehouseCreateV1Response {
  readonly points?: readonly OzonDropOffPoint[];
}
