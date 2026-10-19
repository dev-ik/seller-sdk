import { array, object, string, type Schema } from "@safe-shape/core";
import type { DeleteAutoAddProductsV2Response } from "./types.js";
export const deleteAutoAddProductsV2ResponseSchema: Schema<DeleteAutoAddProductsV2Response> =
  object({
    product_ids: array(string()).optional(),
  });
