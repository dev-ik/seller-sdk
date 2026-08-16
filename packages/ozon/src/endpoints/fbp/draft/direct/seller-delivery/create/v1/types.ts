import type { OzonFbpDirectDraftResponse } from "../../../shared/v1/types.js";
export interface CreateFbpDirectSellerDeliveryDraftV1Request {
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
     * ФИО водителя.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly driver_name: string;

    /**
     * Начало таймслота.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly timeslot_start: string;

    /**
     * Номер автомобиля.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly vehicle_number: string;

    /**
     * Тип автомобиля.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly vehicle_type: string;
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
export type CreateFbpDirectSellerDeliveryDraftV1Response =
  OzonFbpDirectDraftResponse;
