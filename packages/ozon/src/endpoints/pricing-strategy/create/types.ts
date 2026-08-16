import type { OzonPricingStrategyCompetitor } from "../shared/types.js";

export interface CreatePricingStrategyRequest {
  /**
   * Список конкурентов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly competitors: readonly OzonPricingStrategyCompetitor[];

  /**
   * Название стратегии.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly strategy_name: string;
}

export interface CreatePricingStrategyResponse {
  readonly result?: {
    readonly strategy_id?: string;
  };
}
