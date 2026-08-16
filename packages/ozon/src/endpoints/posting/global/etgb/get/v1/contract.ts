import { array, object, string, type Schema } from "@safe-shape/core";
import type { GetEtgbDeclarationsV1Response } from "./types.js";
export const getEtgbDeclarationsV1ResponseSchema: Schema<GetEtgbDeclarationsV1Response> =
  object({
    result: array(
      object({
        etgb: object({
          date: string().optional(),
          number: string().optional(),
          url: string().optional(),
        }).optional(),
        posting_number: string().optional(),
      }),
    ).optional(),
  });
