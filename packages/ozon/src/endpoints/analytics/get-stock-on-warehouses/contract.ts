import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { GetAnalyticsStockOnWarehousesResponse } from "./types.js";

const rowSchema = object({
  free_to_sell_amount: integerSchema.optional(),
  item_code: string().optional(),
  item_name: string().optional(),
  promised_amount: integerSchema.optional(),
  reserved_amount: integerSchema.optional(),
  sku: integerSchema.optional(),
  warehouse_name: string().optional(),
});

const resultSchema = object({
  rows: array(rowSchema).optional(),
});

/** @internal */
export const getAnalyticsStockOnWarehousesResponseSchema: Schema<GetAnalyticsStockOnWarehousesResponse> =
  object({
    result: resultSchema.optional(),
  });
