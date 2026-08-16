export interface UpdateProductMinPriceTimerRequest {
  /** Идентификаторы товаров Ozon, не более 1000 за запрос. */
  readonly product_ids: readonly string[];
}
