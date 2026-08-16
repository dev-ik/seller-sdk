import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { ListProductCertificatesResponse } from "./types.js";

const productCertificateSchema = object({
  certificate_id: integerSchema.optional(),
  certificate_number: string().optional(),
  certificate_name: string().optional(),
  type_code: string().optional(),
  status_code: string().optional(),
  accordance_type_code: string().optional(),
  rejection_reason_code: string().optional(),
  verification_comment: string().optional(),
  issue_date: rfc3339DateTimeSchema.optional(),
  expire_date: rfc3339DateTimeSchema.optional(),
  products_count: integerSchema.optional(),
});

export const listProductCertificatesResponseSchema: Schema<ListProductCertificatesResponse> =
  object({
    result: object({
      certificates: array(productCertificateSchema).optional(),
      page_count: integerSchema.optional(),
    }).optional(),
  });
