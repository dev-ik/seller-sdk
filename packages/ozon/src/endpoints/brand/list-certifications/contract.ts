import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { ListBrandCertificationsResponse } from "./types.js";

const brandCertificationSchema = object({
  brand_name: string().optional(),
  has_certificate: boolean().optional(),
});

const resultSchema = object({
  brand_certification: array(brandCertificationSchema).optional(),
  total: integerSchema.optional(),
});

/** @internal */
export const listBrandCertificationsResponseSchema: Schema<ListBrandCertificationsResponse> =
  object({
    result: resultSchema.optional(),
  });
