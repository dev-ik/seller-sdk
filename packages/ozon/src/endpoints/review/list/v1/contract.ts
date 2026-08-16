import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { reviewSummaryV1Schema } from "../../shared/contract.js";
import type { ListReviewsV1Response } from "./types.js";

export const listReviewsV1ResponseSchema: Schema<ListReviewsV1Response> =
  object({
    has_next: boolean().optional(),
    last_id: string().optional(),
    reviews: array(reviewSummaryV1Schema).optional(),
  });
