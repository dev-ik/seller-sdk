import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ImportProductPicturesResponse } from "./types.js";

const picture = object({
  is_color: boolean().optional(),
  is_primary: boolean().optional(),
  product_id: integerSchema.optional(),
  state: string().optional(),
  url: string().optional(),
});

const result = object({
  pictures: array(picture).optional(),
});

export const importProductPicturesResponseSchema: Schema<ImportProductPicturesResponse> =
  object({
    result: result.optional(),
  });
