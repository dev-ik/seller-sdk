import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { GetProductStocksByWarehouseResponse } from "./types.js";

const stock = object({
  free_stock: integerSchema.optional(),
  offer_id: string().optional(),
  present: integerSchema.optional(),
  product_id: integerSchema.optional(),
  reserved: integerSchema.optional(),
  sku: integerSchema.optional(),
  updated_at: rfc3339DateTimeSchema.optional(),
  warehouse_id: integerSchema.optional(),
});

export const getProductStocksByWarehouseResponseSchema: Schema<GetProductStocksByWarehouseResponse> =
  object({
    cursor: string().optional(),
    has_next: boolean().optional(),
    stocks: array(stock).optional(),
  });
