import type { OzonPricingStrategyCompetitor } from "../shared/types.js";

export interface UpdatePricingStrategyRequest {
  /**
   * Список конкурентов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly competitors: readonly OzonPricingStrategyCompetitor[];

  /**
   * Идентификатор стратегии.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly strategy_id: string;

  /**
   * Название стратегии.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly strategy_name: string;
}

export type UpdatePricingStrategyResponse = Readonly<Record<string, never>>;
