import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import type { OzonFbsPostingMoveStatusResponse } from "./types.js";

const moveStatusSchema = object({
  error: string().optional(),
  posting_number: string().optional(),
  result: boolean().optional(),
});

export const ozonFbsPostingMoveStatusResponseSchema: Schema<OzonFbsPostingMoveStatusResponse> =
  object({ result: array(moveStatusSchema).optional() });
