import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListFboProductStocksByWarehouseV1Response } from "./types.js";
export const listFboProductStocksByWarehouseV1ResponseSchema: Schema<ListFboProductStocksByWarehouseV1Response> =
  object({
    cursor: string().optional(),
    has_next: boolean().optional(),
    products: array(
      object({
        offer_id: string().optional(),
        present: integerSchema.optional(),
        product_id: integerSchema.optional(),
        reserved: integerSchema.optional(),
        sku: integerSchema.optional(),
        warehouse_id: integerSchema.optional(),
      }),
    ).optional(),
  });
