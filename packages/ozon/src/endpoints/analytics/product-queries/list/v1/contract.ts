import { array, number, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { analyticsProductQueriesPeriodSchema } from "../../shared/v1/contract.js";
import type {
  ListAnalyticsProductQueriesV1Response,
  OzonAnalyticsProductQueryItem,
} from "./types.js";

const productQueryItemSchema: Schema<OzonAnalyticsProductQueryItem> = object({
  category: string().optional(),
  currency: string().optional(),
  gmv: number().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  position: number().optional(),
  sku: integerSchema.optional(),
  unique_search_users: integerSchema.optional(),
  unique_view_users: integerSchema.optional(),
  view_conversion: number().optional(),
});

export const listAnalyticsProductQueriesV1ResponseSchema: Schema<ListAnalyticsProductQueriesV1Response> =
  object({
    analytics_period: analyticsProductQueriesPeriodSchema.optional(),
    items: array(productQueryItemSchema).optional(),
    page_count: integerSchema.optional(),
    total: integerSchema.optional(),
  });
