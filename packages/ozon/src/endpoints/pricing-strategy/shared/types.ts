export interface OzonPricingStrategyCompetitor {
  /**
   * Коэффициент, на который будет умножаться минимальная цена среди конкурентов. Допустимый диапазон
   * — от `0.5` до `1.2`.
   *
   * Формат: `float`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly coefficient: number;

  /**
   * Идентификатор конкурента.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly competitor_id: number;
}

export interface OzonPricingStrategyReference {
  readonly strategy_id: string;
}
