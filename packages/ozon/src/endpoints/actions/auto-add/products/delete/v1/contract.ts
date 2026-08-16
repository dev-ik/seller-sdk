import { array, object, string, type Schema } from "@safe-shape/core";
import type { DeleteAutoAddProductsV1Response } from "./types.js";
export const deleteAutoAddProductsV1ResponseSchema: Schema<DeleteAutoAddProductsV1Response> =
  object({ product_ids: array(string()).optional() });
