export interface GetPricingStrategyIdsByProductIdsRequest {
  /**
   * Список идентификаторов товаров в системе Ozon — `product_id`. Максимальное количество — 50.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: readonly string[];
}

export interface OzonProductPricingStrategy {
  readonly product_id?: number;
  readonly strategy_id?: string;
}

export interface GetPricingStrategyIdsByProductIdsResponse {
  readonly result?: {
    readonly products_info?: readonly OzonProductPricingStrategy[];
  };
}
