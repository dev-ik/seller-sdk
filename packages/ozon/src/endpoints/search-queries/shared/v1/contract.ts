import { array, number, object, string, type Schema } from "@safe-shape/core";
import type { OzonSearchQueriesResponse } from "./types.js";

export const searchQueryAnalyticsSchema = object({
  add_to_cart: number().optional(),
  avg_price: number().optional(),
  client_count: number().optional(),
  conversion_to_cart: number().optional(),
  items_views: number().optional(),
  query: string().optional(),
  sellers_count: number().optional(),
});

export const searchQueriesResponseSchema: Schema<OzonSearchQueriesResponse> =
  object({
    offset: string().optional(),
    search_queries: array(searchQueryAnalyticsSchema).optional(),
    total: string().optional(),
  });
