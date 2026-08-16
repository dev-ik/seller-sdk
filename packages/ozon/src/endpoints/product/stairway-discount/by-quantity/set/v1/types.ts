export interface OzonStairwayDiscountStep {
  /**
   * Размер скидки в процентах.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly discount: number;

  /**
   * Количество товаров в заказе для применения скидки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quantity: number;

  /**
   * Уровень скидки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly step: number;
}

export interface OzonProductStairwayDiscountInput {
  /**
   * `true`, чтобы включить скидку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly enabled: boolean;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku: number;

  /**
   * Информация об уровне скидки от количества.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly stairway: {
    /**
     * Информация об уровнях скидки. Количество уровней — от 1 до 4.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly steps: readonly OzonStairwayDiscountStep[];
  };
}

export interface SetProductStairwayDiscountByQuantityV1Request {
  /**
   * Информация о скидке от количества по товарам.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly stairways: readonly OzonProductStairwayDiscountInput[];

  /**
   * Передайте `true`, чтобы игнорировать предупреждения и установить скидку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly suppress_warnings?: boolean;
}

export interface OzonStairwayDiscountErrorData {
  readonly code?: string;
  readonly field?: string;
  readonly message?: string;
  readonly step?: number;
  readonly value?: string;
}

export interface OzonStairwayDiscountError {
  readonly data?: readonly OzonStairwayDiscountErrorData[];
  readonly sku?: number;
}

export interface SetProductStairwayDiscountByQuantityV1Response {
  readonly accepted?: boolean;
  readonly errors?: readonly OzonStairwayDiscountError[];
  readonly warnings?: readonly OzonStairwayDiscountError[];
}
