export interface OzonPromotionProduct {
  readonly id?: number;
  readonly price?: number;
  readonly action_price?: number;
  readonly alert_max_action_price_failed?: boolean;
  readonly alert_max_action_price?: number;
  readonly max_action_price?: number;
  readonly add_mode?: string;
  readonly min_stock?: number;
  readonly stock?: number;
  readonly current_boost?: number;
  readonly price_min_elastic?: number;
  readonly price_max_elastic?: number;
  readonly min_boost?: number;
  readonly max_boost?: number;
}

export interface PromotionProductsPageRequest {
  /**
   * Идентификатор акции. Можно получить с помощью метода [/v1/actions](#operation/Promos).
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;

  /**
   * Количество ответов на странице. По умолчанию — 100.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit?: number;

  /**
   * Идентификатор последнего значения на странице. При первом запросе оставьте это поле пустым.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: number;
}

export interface OzonPromotionProductsPage {
  readonly products?: readonly OzonPromotionProduct[];
  readonly total?: number;
  readonly last_id?: number;
}

export interface PromotionProductsPageResponse {
  readonly result?: OzonPromotionProductsPage;
}

export interface OzonPromotionProductRejection {
  readonly product_id?: number;
  readonly reason?: string;
}

export interface OzonPromotionProductsChangeResult {
  readonly product_ids?: readonly number[];
  readonly rejected?: readonly OzonPromotionProductRejection[];
}

export interface PromotionProductsChangeResponse {
  readonly result?: OzonPromotionProductsChangeResult;
}
