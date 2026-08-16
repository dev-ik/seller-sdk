import type {
  OzonDropOffPoint,
  OzonDropOffPointType,
} from "../../../../shared/v1/types.js";

export interface ListDropOffPointsForWarehouseUpdateV1Request {
  /**
   * Параметры поиска.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly search?: {
    /**
     * Поиск по адресу drop-off пункта.
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

  /**
   * Фильтр по существующему FBS-складу.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export interface ListDropOffPointsForWarehouseUpdateV1Response {
  readonly points?: readonly OzonDropOffPoint[];
}
