import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { ListCertificateProductsResponse } from "./types.js";

const certificateProductSchema = object({
  product_id: integerSchema.optional(),
  product_status_code: string().optional(),
  sku: integerSchema.optional(),
});

export const listCertificateProductsResponseSchema: Schema<ListCertificateProductsResponse> =
  object({
    result: object({
      items: array(certificateProductSchema).optional(),
      count: integerSchema.optional(),
    }).optional(),
  });
