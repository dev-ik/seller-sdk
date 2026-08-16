import type { OzonSellerActionCreatedResponse } from "../../../shared/v1/types.js";

export interface CreateSellerDiscountActionV1Request {
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
   * Минимальный процент скидки.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly min_action_percent: number;

  /**
   * Название акции.
   *
   * Минимальная длина: `1`. Максимальная длина: `256`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly title?: string;
}

export type CreateSellerDiscountActionV1Response =
  OzonSellerActionCreatedResponse;
