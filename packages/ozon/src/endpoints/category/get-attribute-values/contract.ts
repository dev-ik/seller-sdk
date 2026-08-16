import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { GetDescriptionCategoryAttributeValuesResponse } from "./types.js";

const dictionaryValueSchema = object({
  id: integerSchema.optional(),
  info: string().optional(),
  picture: string().optional(),
  value: string().optional(),
});

/** @internal */
export const getDescriptionCategoryAttributeValuesResponseSchema: Schema<GetDescriptionCategoryAttributeValuesResponse> =
  object({
    has_next: boolean().optional(),
    result: array(dictionaryValueSchema).optional(),
  });
