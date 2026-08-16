import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { SearchDescriptionCategoryAttributeValuesResponse } from "./types.js";

const valueSchema = object({
  id: integerSchema.optional(),
  info: string().optional(),
  picture: string().optional(),
  value: string().optional(),
});

/** @internal */
export const searchDescriptionCategoryAttributeValuesResponseSchema: Schema<SearchDescriptionCategoryAttributeValuesResponse> =
  object({
    result: array(valueSchema).optional(),
  });
