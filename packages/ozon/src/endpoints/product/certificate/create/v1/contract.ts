import { object, union, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { CreateProductCertificateV1Response } from "./types.js";
export const createProductCertificateV1ResponseSchema: Schema<CreateProductCertificateV1Response> =
  union([integerSchema, object({ id: integerSchema.optional() })]);
