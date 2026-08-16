export interface DeleteProductsFromPricingStrategyRequest {
  /**
   * Список идентификаторов товаров в системе Ozon — `product_id`. Максимальное количество — 50.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: readonly string[];
}

export interface DeleteProductsFromPricingStrategyResponse {
  readonly result?: {
    readonly failed_product_count?: number;
  };
}
