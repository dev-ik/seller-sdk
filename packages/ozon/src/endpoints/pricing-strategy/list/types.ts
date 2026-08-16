export interface ListPricingStrategiesRequest {
  /**
   * Страница списка, с которой нужно выгрузить стратегии. Минимальное значение — `1`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page: number;

  /**
   * Максимальное количество стратегий на странице. Допустимые значения — от `1` до `50`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}

export interface OzonPricingStrategySummary {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  readonly update_type?: string;
  readonly updated_at?: string;
  readonly products_count?: number;
  readonly competitors_count?: number;
  readonly enabled?: boolean;
}

export interface ListPricingStrategiesResponse {
  readonly strategies?: readonly OzonPricingStrategySummary[];
  readonly total?: number;
}
