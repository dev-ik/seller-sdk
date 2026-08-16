import type { OzonDropOffPointType } from "../../../shared/v1/types.js";
import type { OzonWarehouseReturnPointListResponse } from "../../shared/v1/types.js";

export interface ListReturnPointsForWarehouseUpdateV1Request {
  /**
   * Идентификатор выбранной точки отгрузки на складе.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly current_dropoff_point_id?: number;

  /**
   * Установленный пункт возврата. Получите значение параметра методом
   * [/v1/warehouse/fbs/return-mile/info](#operation/WarehouseFBSReturnMileInfo).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly current_return_point_id?: number;

  /**
   * Идентификатор последнего значения на странице.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: number;

  /**
   * Количество значений в ответе.
   *
   * Формат: `int32`. Минимум: `1`. Максимум: `500`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Параметры поиска.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly search?: {
    /**
     * Адрес пункта возврата.
     *
     * Максимум: `1000`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly address?: string;

    /**
     * Тип пункта возврата: - `PVZ` — пункт выдачи заказов; - `PPZ` — пункт приёма заказов; - `SC` —
     * сортировочный центр.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly types?: readonly OzonDropOffPointType[];
  };

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type ListReturnPointsForWarehouseUpdateV1Response =
  OzonWarehouseReturnPointListResponse;
