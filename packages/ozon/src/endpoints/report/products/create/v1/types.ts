import type {
  OzonCreateReportResponse,
  OzonReportLanguage,
} from "../../../shared/types.js";
export type OzonProductReportVisibility =
  | "ALL"
  | "VALIDATION_STATE_FAIL"
  | "TO_SUPPLY"
  | "IN_SALE"
  | "REMOVED_FROM_SALE"
  | "PARTIAL_APPROVED"
  | "IMAGE_ABSENT"
  | "ARCHIVED"
  | "AUTO_ARCHIVED"
  | "MANUAL_ARCHIVED";

export interface CreateProductsReportV1Request {
  /**
   * Язык ответа: - `RU` — русский, - `EN` — английский.
   *
   * Пример: `DEFAULT`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly language?: OzonReportLanguage;

  /**
   * Идентификатор товара в системе продавца — артикул.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id?: readonly string[];

  /**
   * Поиск по содержанию записи, проверяет наличие.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly search?: string;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku?: readonly number[];

  /**
   * Фильтр по видимости товара: - `ALL` — все товары, кроме архивных; - `VALIDATION_STATE_FAIL` —
   * товары, которые не прошли проверку валидатором на премодерации; - `TO_SUPPLY` — товары, готовые
   * к продаже; - `IN_SALE` — товары в продаже; - `REMOVED_FROM_SALE` — товары, скрытые от
   * покупателей; - `PARTIAL_APPROVED` — товары с предупреждениями, требуют доработки; -
   * `IMAGE_ABSENT` — товары без фото; - `ARCHIVED` — товары в архиве; - `AUTO_ARCHIVED` — товары,
   * архивированные автоматически; - `MANUAL_ARCHIVED` — товары, архивированные вручную.
   *
   * Пример: `ALL`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly visibility?: OzonProductReportVisibility;
}
export type CreateProductsReportV1Response = OzonCreateReportResponse;
