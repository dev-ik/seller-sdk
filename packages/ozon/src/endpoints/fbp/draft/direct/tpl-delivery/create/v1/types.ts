import type { OzonFbpDirectDraftResponse } from "../../../shared/v1/types.js";

export interface CreateFbpDirectTplDeliveryDraftV1Request {
  /**
   * Идентификатор комплекта.
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
     * Время начала таймслота по местному времени.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly timeslot_start: string;

    /**
     * Трек-номер отправления.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly tracking_number: string;

    /**
     * Название транспортной компании.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly transport_company_name: string;
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
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type CreateFbpDirectTplDeliveryDraftV1Response =
  OzonFbpDirectDraftResponse;
