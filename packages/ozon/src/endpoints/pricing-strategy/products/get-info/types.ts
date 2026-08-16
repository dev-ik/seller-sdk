export interface GetPricingStrategyProductInfoRequest {
  /**
   * Идентификатор товара в системе Ozon — `product_id`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: number;
}

export interface OzonPricingStrategyProductInfo {
  readonly strategy_id?: string;
  readonly is_enabled?: boolean;
  readonly strategy_product_price?: number;
  readonly price_downloaded_at?: string;
  readonly strategy_competitor_id?: number;
  readonly strategy_competitor_product_url?: string;
}

export interface GetPricingStrategyProductInfoResponse {
  readonly result?: OzonPricingStrategyProductInfo;
}
