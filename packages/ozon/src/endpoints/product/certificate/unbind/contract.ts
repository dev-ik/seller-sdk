import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { UnbindProductCertificateResponse } from "./types.js";

export const unbindProductCertificateResponseSchema: Schema<UnbindProductCertificateResponse> =
  object({
    result: array(
      object({
        error: string().optional(),
        product_id: integerSchema.optional(),
        updated: boolean().optional(),
      }),
    ).optional(),
  });
