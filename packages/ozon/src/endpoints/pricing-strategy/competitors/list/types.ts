export interface ListPricingCompetitorsRequest {
  /**
   * Страница списка, с которой нужно выгрузить конкурентов. Минимальное значение — `1`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page: number;

  /**
   * Максимальное количество конкурентов на странице. Допустимы значения от `1` до `50`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}

export interface OzonPricingCompetitor {
  readonly name?: string;
  readonly id?: number;
}

export interface ListPricingCompetitorsResponse {
  readonly competitor?: readonly OzonPricingCompetitor[];
  readonly total?: number;
}
