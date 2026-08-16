import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { GetProductStocksByWarehouseFbsV2Response } from "./types.js";

const product = object({
  free_stock: integerSchema.optional(),
  offer_id: string().optional(),
  present: integerSchema.optional(),
  product_id: integerSchema.optional(),
  reserved: integerSchema.optional(),
  sku: integerSchema.optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
});

export const getProductStocksByWarehouseFbsV2ResponseSchema: Schema<GetProductStocksByWarehouseFbsV2Response> =
  object({
    cursor: string().optional(),
    has_next: boolean().optional(),
    products: array(product).optional(),
  });
