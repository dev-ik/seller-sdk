import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListCertificationCategoriesV1Response } from "./types.js";
const item = object({
  category_name: string().optional(),
  is_required: boolean().optional(),
});
export const listCertificationCategoriesV1ResponseSchema: Schema<ListCertificationCategoriesV1Response> =
  object({
    result: object({
      certification: array(item).optional(),
      total: integerSchema.optional(),
    }).optional(),
  });
