import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { CreateProductCertificateV2Response } from "./types.js";

export const createProductCertificateV2ResponseSchema: Schema<CreateProductCertificateV2Response> =
  object({
    certificate_id: union([integerSchema, literal(null)]).optional(),
    params: array(
      object({
        error: string().optional(),
        name: string().optional(),
        state: union([
          literal("VALID"),
          literal("INVALID"),
          literal("MISSING"),
        ]).optional(),
      }),
    ).optional(),
    status: union([literal("INCOMPLETE"), literal("COMPLETED")]).optional(),
  });
