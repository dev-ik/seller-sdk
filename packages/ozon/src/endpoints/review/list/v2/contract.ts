import {
  array,
  boolean,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { ListReviewsV2Response } from "./types.js";

const reviewSummaryV2Schema = object({
  comments_amount: integerSchema.optional(),
  id: string().optional(),
  is_rating_participant: boolean().optional(),
  order_status: union([literal("DELIVERED"), literal("CANCELLED")]).optional(),
  photos_amount: integerSchema.optional(),
  published_at: rfc3339DateTimeSchema.optional(),
  rating: integerSchema.optional(),
  sku: integerSchema.optional(),
  status: union([
    literal("NEW"),
    literal("VIEWED"),
    literal("PROCESSED"),
  ]).optional(),
  text: string().optional(),
  videos_amount: integerSchema.optional(),
});

export const listReviewsV2ResponseSchema: Schema<ListReviewsV2Response> =
  object({
    has_next: boolean().optional(),
    last_id: string().optional(),
    reviews: array(reviewSummaryV2Schema).optional(),
  });
