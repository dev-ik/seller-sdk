export interface DeletePricingStrategyRequest {
  /**
   * Идентификатор стратегии.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly strategy_id: string;
}

export type DeletePricingStrategyResponse = Readonly<Record<string, never>>;
