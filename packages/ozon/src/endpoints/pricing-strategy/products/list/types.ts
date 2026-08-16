export interface ListPricingStrategyProductsRequest {
  /**
   * Идентификатор стратегии.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly strategy_id: string;
}

export interface ListPricingStrategyProductsResponse {
  readonly result?: {
    readonly product_id?: readonly string[];
  };
}
