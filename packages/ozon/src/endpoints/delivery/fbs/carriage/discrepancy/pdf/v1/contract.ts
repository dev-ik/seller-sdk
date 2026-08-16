import { object, string, type Schema } from "@safe-shape/core";
import type { GetFbsCarriageDiscrepancyActResponse } from "./types.js";
export const getFbsCarriageDiscrepancyActResponseSchema: Schema<GetFbsCarriageDiscrepancyActResponse> =
  object({
    content: string().optional(),
    name: string().optional(),
    type: string().optional(),
  });
