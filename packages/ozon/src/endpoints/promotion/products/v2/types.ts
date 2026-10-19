export type ListPromotionProductsV2Request = {
  /**
   * Идентификатор акции. Получите методом [/v1/actions](#operation/Promos).
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;
  /**
   * Идентификатор последнего значения на странице. При первом запросе оставьте пустым.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: string;
  /**
   * Количество значений на странице.
   *
   * Формат: `uint64`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
};

export type ListPromotionProductsV2Response = {
  readonly last_id?: string;
  readonly products?: ReadonlyArray<{
    readonly action_price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly add_mode?: "SELLER" | "AUTO";
    readonly alert_max_action_price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly alert_max_action_price_failed?: boolean;
    readonly current_boost?: number;
    readonly id?: number;
    readonly is_quarantined?: boolean;
    readonly marketplace_seller_price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly max_action_price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly max_boost?: number;
    readonly min_boost?: number;
    readonly min_seller_price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly min_stock?: number;
    readonly price?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly price_max_elastic?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly price_min_elastic?: {
      readonly amount?: string;
      readonly currency?: string;
    };
    readonly recommended_stock?: number;
    readonly stock?: number;
    readonly website_prices?: {
      readonly price?: {
        readonly amount?: string;
        readonly currency?: string;
      };
      readonly prices_by_schema?: Readonly<
        Record<
          string,
          {
            readonly black_price?: {
              readonly amount?: string;
              readonly currency?: string;
            };
            readonly green_price?: {
              readonly amount?: string;
              readonly currency?: string;
            };
          }
        >
      >;
    };
  }>;
  readonly total?: number;
};
