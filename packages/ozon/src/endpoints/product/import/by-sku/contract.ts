import { array, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ImportProductsBySkuResponse } from "./types.js";

const result = object({
  task_id: integerSchema.optional(),
  unmatched_sku_list: array(integerSchema).optional(),
});

export const importProductsBySkuResponseSchema: Schema<ImportProductsBySkuResponse> =
  object({
    result: result.optional(),
  });
