export interface UpdateProductDiscountRequest {
  /**
   * Размер скидки: от 3 до 99 процентов.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly discount: number;

  /**
   * Идентификатор товара в системе Ozon — `product_id`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: number;
}

export interface UpdateProductDiscountResponse {
  readonly result?: boolean;
}
