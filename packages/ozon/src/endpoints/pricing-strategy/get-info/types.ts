import type { OzonPricingStrategyCompetitor } from "../shared/types.js";

export interface GetPricingStrategyRequest {
  /**
   * Идентификатор стратегии.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly strategy_id: string;
}

export interface OzonPricingStrategyInfo {
  readonly competitors?: readonly OzonPricingStrategyCompetitor[];
  readonly enabled?: boolean;
  readonly name?: string;
  readonly type?: string;
  readonly update_type?: string;
}

export interface GetPricingStrategyResponse {
  readonly result?: OzonPricingStrategyInfo;
}
