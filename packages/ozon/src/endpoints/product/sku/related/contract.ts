import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { GetRelatedProductSkusResponse } from "./types.js";

const relatedSku = object({
  availability: string().optional(),
  deleted_at: rfc3339DateTimeSchema.optional(),
  delivery_schema: string().optional(),
  product_id: integerSchema.optional(),
  sku: integerSchema.optional(),
});

const relatedSkuError = object({
  code: string().optional(),
  message: string().optional(),
  sku: integerSchema.optional(),
});

export const getRelatedProductSkusResponseSchema: Schema<GetRelatedProductSkusResponse> =
  object({
    errors: array(relatedSkuError).optional(),
    items: array(relatedSku).optional(),
  });
