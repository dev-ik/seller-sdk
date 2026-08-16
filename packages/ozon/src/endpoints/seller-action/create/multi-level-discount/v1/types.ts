import type {
  OzonSellerActionCreatedResponse,
  OzonSellerActionDiscountLevel,
  OzonSellerActionDiscountType,
} from "../../../shared/v1/types.js";

export interface CreateSellerMultiLevelDiscountActionV1Request {
  /**
   * Дата и время окончания акции.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_end: string;

  /**
   * Дата и время начала акции.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_start: string;

  /**
   * Уровни скидки.
   *
   * Минимум элементов: `2`. Максимум элементов: `4`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly discount_levels: readonly OzonSellerActionDiscountLevel[];

  /**
   * Тип скидки: - `PERCENT` — скидка в процентах; - `CURRENCY` — скидка в валюте.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly discount_type: OzonSellerActionDiscountType;

  /**
   * `true`, если акция только для юридических лиц.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_legal_entities_segment?: boolean;

  /**
   * Название акции.
   *
   * Минимальная длина: `1`. Максимальная длина: `256`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly title?: string;
}

export type CreateSellerMultiLevelDiscountActionV1Response =
  OzonSellerActionCreatedResponse;
