import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import type { SetFbsCarriagePostingsResponse } from "./types.js";

const postingResultSchema = object({
  error: string().optional(),
  posting_number: string().optional(),
  result: boolean().optional(),
});

export const setFbsCarriagePostingsResponseSchema: Schema<SetFbsCarriagePostingsResponse> =
  object({ result: array(postingResultSchema).optional() });
