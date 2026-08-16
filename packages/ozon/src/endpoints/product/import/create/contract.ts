import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ImportProductsResponse } from "./types.js";

const result = object({
  task_id: integerSchema.optional(),
});

export const importProductsResponseSchema: Schema<ImportProductsResponse> =
  object({
    result: result.optional(),
  });
