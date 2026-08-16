import {
  array,
  boolean,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetProductAttributesResponse } from "./types.js";

const attributeValue = object({
  dictionary_value_id: integerSchema.optional(),
  value: string().optional(),
});

const attribute = object({
  complex_id: integerSchema.optional(),
  id: integerSchema.optional(),
  values: array(attributeValue).optional(),
});

const complexAttributeValue = object({
  dictionaryValueId: integerSchema.optional(),
  value: string().optional(),
});

const complexAttribute = object({
  complex_id: integerSchema.optional(),
  id: integerSchema.optional(),
  values: array(complexAttributeValue).optional(),
});

const image = object({
  default: boolean().optional(),
  file_name: string().optional(),
  index: integerSchema.optional(),
});

const imageValue = union([string(), image]);

const modelInfo = object({
  count: integerSchema.optional(),
  model_id: integerSchema.optional(),
});

const pdf = object({
  file_name: string().optional(),
  name: string().optional(),
});

const item = object({
  attributes: array(attribute).optional(),
  attributes_with_defaults: array(integerSchema).optional(),
  barcode: string().optional(),
  barcodes: array(string()).optional(),
  color_image: string().optional(),
  complex_attributes: array(complexAttribute).optional(),
  depth: integerSchema.optional(),
  description_category_id: integerSchema.optional(),
  dimension_unit: string().optional(),
  height: integerSchema.optional(),
  id: integerSchema.optional(),
  images: array(imageValue).optional(),
  model_info: modelInfo.optional(),
  name: string().optional(),
  offer_id: string().optional(),
  pdf_list: array(pdf).optional(),
  primary_image: string().optional(),
  sku: union([string(), integerSchema]).optional(),
  type_id: integerSchema.optional(),
  weight: integerSchema.optional(),
  weight_unit: string().optional(),
  width: integerSchema.optional(),
});

export const getProductAttributesResponseSchema: Schema<GetProductAttributesResponse> =
  object({
    last_id: string().optional(),
    result: array(item).optional(),
    total: union([string(), integerSchema]).optional(),
  });
