import { array, number, object, string, type Schema } from "@safe-shape/core";
import type { GetFbsRatingIndexInfoResponse } from "./types.js";

const indexDynamicsSchema = object({
  date: string().optional(),
  index_by_date: number().optional(),
  processing_costs_sum_by_date: number().optional(),
});

/** @internal */
export const getFbsRatingIndexInfoResponseSchema: Schema<GetFbsRatingIndexInfoResponse> =
  object({
    currency_code: string().optional(),
    defects: array(indexDynamicsSchema).optional(),
    index: number().optional(),
    period_from: string().optional(),
    period_to: string().optional(),
    processing_costs_sum: number().optional(),
  });
