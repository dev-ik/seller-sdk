import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListCertificationCategoriesV2Response } from "./types.js";
const item = object({
  category_id: integerSchema.optional(),
  category_name: string().optional(),
  is_required: boolean().optional(),
  type_id: integerSchema.optional(),
  type_name: string().optional(),
});
export const listCertificationCategoriesV2ResponseSchema: Schema<ListCertificationCategoriesV2Response> =
  object({
    certification: array(item).optional(),
    total: integerSchema.optional(),
  });
