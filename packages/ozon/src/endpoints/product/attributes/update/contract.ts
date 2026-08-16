import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { UpdateProductAttributesResponse } from "./types.js";

export const updateProductAttributesResponseSchema: Schema<UpdateProductAttributesResponse> =
  object({
    task_id: integerSchema.optional(),
  });
