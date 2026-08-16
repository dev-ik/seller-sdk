import { array, object, string, type Schema } from "@safe-shape/core";
import type { OzonCertificateDictionaryResponse } from "./types.js";

const item = object({ name: string().optional(), value: string().optional() });
export const certificateDictionaryResponseSchema: Schema<OzonCertificateDictionaryResponse> =
  object({ result: array(item).optional() });
