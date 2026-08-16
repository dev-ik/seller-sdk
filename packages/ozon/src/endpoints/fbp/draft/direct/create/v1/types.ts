import type { OzonFbpDirectDraftResponse } from "../../shared/v1/types.js";
export interface CreateFbpDirectDraftV1Request {
  /**
   * Идентификатор провалидированного списка товаров. Чтобы получить, используйте метод
   * [/v1/fbp/draft/direct/product/validate](#operation/FbpDraftDirectProductValidate).
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
     * Начало таймслота доставки.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly timeslot_start: string;
  };

  /**
   * Количество единиц упаковки.
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
export type CreateFbpDirectDraftV1Response = OzonFbpDirectDraftResponse;
