export interface OzonSearchQueryAnalytics {
  readonly add_to_cart?: number;
  readonly avg_price?: number;
  readonly client_count?: number;
  readonly conversion_to_cart?: number;
  readonly items_views?: number;
  readonly query?: string;
  readonly sellers_count?: number;
}

export interface OzonSearchQueriesResponse {
  readonly offset?: string;
  readonly search_queries?: readonly OzonSearchQueryAnalytics[];
  readonly total?: string;
}
