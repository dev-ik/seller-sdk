import { array, number, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { analyticsProductQueriesPeriodSchema } from "../../shared/v1/contract.js";
import type {
  GetAnalyticsProductQueryDetailsV1Response,
  OzonAnalyticsProductQueryDetails,
} from "./types.js";

const productQueryDetailsSchema: Schema<OzonAnalyticsProductQueryDetails> =
  object({
    currency: string().optional(),
    gmv: number().optional(),
    order_count: integerSchema.optional(),
    position: number().optional(),
    query: string().optional(),
    query_index: integerSchema.optional(),
    sku: integerSchema.optional(),
    unique_search_users: integerSchema.optional(),
    unique_view_users: integerSchema.optional(),
    view_conversion: number().optional(),
  });

export const getAnalyticsProductQueryDetailsV1ResponseSchema: Schema<GetAnalyticsProductQueryDetailsV1Response> =
  object({
    analytics_period: analyticsProductQueriesPeriodSchema.optional(),
    page_count: integerSchema.optional(),
    queries: array(productQueryDetailsSchema).optional(),
    total: integerSchema.optional(),
  });
