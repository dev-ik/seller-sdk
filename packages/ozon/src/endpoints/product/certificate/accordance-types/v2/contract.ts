import { array, object, string, type Schema } from "@safe-shape/core";
import type { ListCertificateAccordanceTypesV2Response } from "./types.js";
const item = object({ code: string().optional(), title: string().optional() });
export const listCertificateAccordanceTypesV2ResponseSchema: Schema<ListCertificateAccordanceTypesV2Response> =
  object({
    result: object({
      base: array(item).optional(),
      hazard: array(item).optional(),
    }).optional(),
  });
