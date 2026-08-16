import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { GetProductStocksByWarehouseFbsResponse } from "./types.js";

const stock = object({
  offer_id: string().optional(),
  present: integerSchema.optional(),
  product_id: integerSchema.optional(),
  reserved: integerSchema.optional(),
  sku: integerSchema.optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
});

export const getProductStocksByWarehouseFbsResponseSchema: Schema<GetProductStocksByWarehouseFbsResponse> =
  object({
    result: array(stock).optional(),
  });
