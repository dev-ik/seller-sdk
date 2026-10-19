import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { ImportProductPicturesV2Response } from "./types.js";
export const importProductPicturesV2ResponseSchema: Schema<ImportProductPicturesV2Response> =
  object({
    task_id: integerSchema.optional(),
  });
