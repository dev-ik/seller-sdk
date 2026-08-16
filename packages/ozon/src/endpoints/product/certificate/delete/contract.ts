import { boolean, object, string, type Schema } from "@safe-shape/core";
import type { DeleteProductCertificateResponse } from "./types.js";
export const deleteProductCertificateResponseSchema: Schema<DeleteProductCertificateResponse> =
  object({
    result: object({
      is_delete: boolean().optional(),
      error_message: string().optional(),
    }).optional(),
  });
