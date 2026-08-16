export interface GetProductSubscriptionCountsRequest {
  /** SKU товаров как int64-строки. */
  readonly skus: readonly string[];
}

export interface OzonProductSubscriptionCount {
  /** Количество пользователей, ожидающих поступления. */
  readonly count?: number;
  /** SKU товара в системе Ozon. */
  readonly sku?: number;
}

export interface GetProductSubscriptionCountsResponse {
  readonly result?: readonly OzonProductSubscriptionCount[];
}
