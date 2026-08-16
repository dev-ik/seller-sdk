import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { GetDescriptionCategoryAttributesResponse } from "./types.js";

const attributeSchema = object({
  attribute_complex_id: integerSchema.optional(),
  category_dependent: boolean().optional(),
  complex_is_collection: boolean().optional(),
  description: string().optional(),
  dictionary_id: integerSchema.optional(),
  group_id: integerSchema.optional(),
  group_name: string().optional(),
  id: integerSchema.optional(),
  is_aspect: boolean().optional(),
  is_collection: boolean().optional(),
  is_required: boolean().optional(),
  max_value_count: integerSchema.optional(),
  name: string().optional(),
  type: string().optional(),
});

/** @internal */
export const getDescriptionCategoryAttributesResponseSchema: Schema<GetDescriptionCategoryAttributesResponse> =
  object({
    result: array(attributeSchema).optional(),
  });
