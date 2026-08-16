export interface GetProductMinPriceTimerStatusRequest {
  /** Идентификаторы товаров Ozon, максимум 1000. */
  readonly product_ids: readonly string[];
}

export interface OzonProductMinPriceTimerStatus {
  /** RFC 3339 или пустая строка, если активного таймера нет. */
  readonly expired_at?: string;
  readonly min_price_for_auto_actions_enabled?: boolean;
  readonly product_id?: number;
}

export interface GetProductMinPriceTimerStatusResponse {
  readonly statuses?: readonly OzonProductMinPriceTimerStatus[];
}
