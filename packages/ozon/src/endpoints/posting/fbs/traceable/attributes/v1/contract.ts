import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetFbsTraceableAttributesResponse } from "./types.js";
const productSchema = object({
  required_attributes: array(string()).optional(),
  sku: integerSchema.optional(),
});
export const getFbsTraceableAttributesResponseSchema: Schema<GetFbsTraceableAttributesResponse> =
  object({ products: array(productSchema).optional() });
