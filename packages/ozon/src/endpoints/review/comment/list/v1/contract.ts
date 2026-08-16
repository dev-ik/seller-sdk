import { array, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { reviewCommentV1Schema } from "../../shared/v1/contract.js";
import type { ListReviewCommentsV1Response } from "./types.js";

export const listReviewCommentsV1ResponseSchema: Schema<ListReviewCommentsV1Response> =
  object({
    comments: array(reviewCommentV1Schema).optional(),
    offset: integerSchema.optional(),
  });
