import type {
  OzonSellerActionCreatedResponse,
  OzonSellerActionDiscountType,
} from "../../../shared/v1/types.js";

export interface CreateSellerDiscountWithConditionActionV1Request {
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
   * Тип скидки: - `PERCENT` — скидка в процентах; - `CURRENCY` — скидка в валюте.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly discount_type: OzonSellerActionDiscountType;

  /**
   * Размер скидки.
   *
   * Формат: `float`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly discount_value: number;

  /**
   * Сумма заказа, с которой действует скидка.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly min_order_amount: number;

  /**
   * Название акции.
   *
   * Минимальная длина: `1`. Максимальная длина: `256`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly title?: string;
}

export type CreateSellerDiscountWithConditionActionV1Response =
  OzonSellerActionCreatedResponse;
