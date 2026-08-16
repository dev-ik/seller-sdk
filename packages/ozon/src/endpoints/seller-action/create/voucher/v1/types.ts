import type {
  OzonSellerActionCreatedResponse,
  OzonSellerActionDiscountType,
} from "../../../shared/v1/types.js";

export interface CreateSellerVoucherActionV1Request {
  /**
   * Бюджет акции. Если бюджет закончится, акция остановится.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly budget: number;

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
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly discount_value: number;

  /**
   * Название акции.
   *
   * Минимальная длина: `1`. Максимальная длина: `256`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly title: string;

  /**
   * Идентификаторы пользователей, которым доступен промокод.
   *
   * Максимум: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly user_ids?: readonly string[];

  /**
   * Параметры промокодов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly voucher_parameters: {
    /**
     * Количество промокодов.
     *
     * Формат: `uint64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly count_codes: number;

    /**
     * `true`, если промокод в открытом доступе.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly is_private: boolean;

    /**
     * Тип промокода: - `ONE` — промокод для всех покупателей на 1 заказ; - `MULTIPLE` — промокод для
     * всех покупателей на любое количество заказов; - `UNIQUE` — промокод для 1 покупателя на 1 заказ.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly type: "ONE" | "MULTIPLE" | "UNIQUE";
  };
}

export type CreateSellerVoucherActionV1Response =
  OzonSellerActionCreatedResponse;
