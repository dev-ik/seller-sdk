import { object, string, type Schema } from "@safe-shape/core";
import type { CancelFbsCarriageResponse } from "./types.js";

export const cancelFbsCarriageResponseSchema: Schema<CancelFbsCarriageResponse> =
  object({
    carriage_status: string().optional(),
    error: string().optional(),
  });
