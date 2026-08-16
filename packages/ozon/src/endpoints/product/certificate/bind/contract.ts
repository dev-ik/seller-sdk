import { boolean, object, type Schema } from "@safe-shape/core";
import type { BindProductCertificateResponse } from "./types.js";
export const bindProductCertificateResponseSchema: Schema<BindProductCertificateResponse> =
  object({ result: boolean().optional() });
