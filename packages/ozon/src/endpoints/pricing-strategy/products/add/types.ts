export interface AddProductsToPricingStrategyRequest {
  /**
   * Список идентификаторов товаров в системе Ozon — `product_id`. Максимальное количество — 50.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: readonly string[];

  /**
   * Идентификатор стратегии.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly strategy_id: string;
}

export interface OzonPricingStrategyProductAddError {
  readonly code?: string;
  readonly error?: string;
  readonly product_id?: number;
}

export interface AddProductsToPricingStrategyResponse {
  readonly result?: {
    readonly errors?: readonly OzonPricingStrategyProductAddError[];
    readonly failed_product_count?: number;
  };
}
