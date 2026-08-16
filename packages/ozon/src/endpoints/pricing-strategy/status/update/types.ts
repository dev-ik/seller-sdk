export interface UpdatePricingStrategyStatusRequest {
  /**
   * Статус стратегии: - `true` — включена, - `false` — отключена.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly enabled: boolean;

  /**
   * Идентификатор стратегии.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly strategy_id: string;
}

export type UpdatePricingStrategyStatusResponse = Readonly<
  Record<string, never>
>;
