import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type {
  GetAnalyticsManageStocksV1Response,
  OzonAnalyticsManagedStock,
} from "./types.js";

const managedStockSchema: Schema<OzonAnalyticsManagedStock> = object({
  defect_stock_count: integerSchema.optional(),
  expiring_stock_count: integerSchema.optional(),
  name: string().optional(),
  offer_id: string().optional(),
  sku: integerSchema.optional(),
  valid_stock_count: integerSchema.optional(),
  waitingdocs_stock_count: integerSchema.optional(),
  warehouse_name: string().optional(),
});

export const getAnalyticsManageStocksV1ResponseSchema: Schema<GetAnalyticsManageStocksV1Response> =
  object({ items: array(managedStockSchema).optional() });
