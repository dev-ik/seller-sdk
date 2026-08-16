import type {
  OzonDropOffPointType,
  OzonWarehouseCoordinates,
} from "../../../shared/v1/types.js";
import type { OzonWarehouseReturnPointListResponse } from "../../shared/v1/types.js";

export interface ListReturnPointsForWarehouseCreateV1Request {
  /**
   * Координаты пункта возврата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly coordinates: OzonWarehouseCoordinates;

  /**
   * Код страны в формате ISO 2.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly country_code: string;

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
   * Идентификатор выбранной точки отгрузки на складе.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly selected_dropoff_point_id?: number;
}

export type ListReturnPointsForWarehouseCreateV1Response =
  OzonWarehouseReturnPointListResponse;
