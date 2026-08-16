import type { OzonFbpDraftCreatedResponse } from "../../../shared/v1/types.js";
export interface CreateFbpDropOffDraftV1Request {
  /**
   * Идентификатор провалидированного списка товаров.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly bundle_id: string;

  /**
   * Детали доставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_details: {
    /**
     * Дата доставки.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly drop_off_date: string;

    /**
     * Идентификатор drop-off пункта.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly drop_off_point_id: number;

    /**
     * Уникальный идентификатор провинции.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly drop_off_province_uuid: string;
  };

  /**
   * Количество грузомест.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly package_units_count: number;

  /**
   * Идентификатор склада продавца.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}
export type CreateFbpDropOffDraftV1Response = OzonFbpDraftCreatedResponse;
