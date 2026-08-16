import { array, object, string, type Schema } from "@safe-shape/core";
import type { ListWarehousesWithInvalidProductsResponse } from "./types.js";

export const listWarehousesWithInvalidProductsResponseSchema: Schema<ListWarehousesWithInvalidProductsResponse> =
  object({ warehouse_ids: array(string()).optional() });
