import { object, string, type Schema } from "@safe-shape/core";
import type { CreateReviewCommentV1Response } from "./types.js";

export const createReviewCommentV1ResponseSchema: Schema<CreateReviewCommentV1Response> =
  object({ comment_id: string().optional() });
