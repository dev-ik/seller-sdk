import { array, number, object, string } from "@safe-shape/core";

export const searchQueryAnalyticsSchema = object({
  add_to_cart: number().optional(),
  avg_price: number().optional(),
  client_count: number().optional(),
  conversion_to_cart: number().optional(),
  items_views: number().optional(),
  query: string().optional(),
  sellers_count: number().optional(),
});

export const searchQueriesResponseShape = {
  offset: string().optional(),
  search_queries: array(searchQueryAnalyticsSchema).optional(),
  total: string().optional(),
};
