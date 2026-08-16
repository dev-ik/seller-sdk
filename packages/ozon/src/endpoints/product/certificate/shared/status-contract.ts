import { array, object, string, type Schema } from "@safe-shape/core";
import type { OzonCertificateStatusListResponse } from "./status-types.js";

const certificateStatusSchema = object({
  code: string().optional(),
  name: string().optional(),
});

export const certificateStatusListResponseSchema: Schema<OzonCertificateStatusListResponse> =
  object({ result: array(certificateStatusSchema).optional() });
