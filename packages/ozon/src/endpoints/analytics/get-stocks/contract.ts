import {
  array,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { GetAnalyticsStocksResponse } from "./types.js";

const itemTagSchema = union([
  literal("UNSPECIFIED"),
  literal("ITEM_ATTRIBUTE_NONE"),
  literal("ECONOM"),
  literal("NOVEL"),
  literal("DISCOUNT"),
  literal("FBS_RETURN"),
  literal("SUPER"),
  literal("MARKABLE"),
]);

const placementZoneSchema = union([
  literal("UNSPECIFIED"),
  literal("CLOSED_ZONE"),
  literal("DANGEROUS_GOOD"),
  literal("PRODUCTS"),
  literal("SORT"),
  literal("NON_SORT"),
  literal("OVERSIZE"),
  literal("JEWELRY"),
  literal("UNRESOLVED"),
]);

const turnoverGradeSchema = union([
  literal("UNSPECIFIED"),
  literal("TURNOVER_GRADE_NONE"),
  literal("DEFICIT"),
  literal("POPULAR"),
  literal("ACTUAL"),
  literal("SURPLUS"),
  literal("NO_SALES"),
  literal("WAS_NO_SALES"),
  literal("RESTRICTED_NO_SALES"),
  literal("COLLECTING_DATA"),
  literal("WAITING_FOR_SUPPLY"),
  literal("WAS_DEFICIT"),
  literal("WAS_POPULAR"),
  literal("WAS_ACTUAL"),
  literal("WAS_SURPLUS"),
]);

const itemSchema = object({
  ads: number().optional(),
  ads_cluster: number().optional(),
  available_stock_count: integerSchema.optional(),
  cluster_id: integerSchema.optional(),
  cluster_name: string().optional(),
  days_without_sales: integerSchema.optional(),
  days_without_sales_cluster: integerSchema.optional(),
  excess_stock_count: integerSchema.optional(),
  expiring_stock_count: integerSchema.optional(),
  idc: number().optional(),
  idc_cluster: number().optional(),
  item_tags: array(itemTagSchema).optional(),
  macrolocal_cluster_id: integerSchema.optional(),
  name: string().optional(),
  offer_id: string().optional(),
  other_stock_count: integerSchema.optional(),
  placement_zone: array(placementZoneSchema).optional(),
  requested_stock_count: integerSchema.optional(),
  return_from_customer_stock_count: integerSchema.optional(),
  return_to_seller_stock_count: integerSchema.optional(),
  sku: integerSchema.optional(),
  stock_defect_stock_count: integerSchema.optional(),
  transit_defect_stock_count: integerSchema.optional(),
  transit_stock_count: integerSchema.optional(),
  turnover_grade: turnoverGradeSchema.optional(),
  turnover_grade_cluster: turnoverGradeSchema.optional(),
  valid_stock_count: integerSchema.optional(),
  waiting_docs_stock_count: integerSchema.optional(),
  waiting_docs_to_export_stock_count: integerSchema.optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
});

/** @internal */
export const getAnalyticsStocksResponseSchema: Schema<GetAnalyticsStocksResponse> =
  object({
    items: array(itemSchema).optional(),
  });
