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
import { reviewPhotoSchema, reviewVideoSchema } from "../../shared/contract.js";
import type { GetReviewInfoV2Response } from "./types.js";

export const getReviewInfoV2ResponseSchema: Schema<GetReviewInfoV2Response> =
  object({
    comments_amount: integerSchema.optional(),
    dislikes_amount: integerSchema.optional(),
    id: string().optional(),
    is_rating_participant: boolean().optional(),
    likes_amount: integerSchema.optional(),
    order_status: union([
      literal("DELIVERED"),
      literal("CANCELLED"),
    ]).optional(),
    photos: array(reviewPhotoSchema).optional(),
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
    videos: array(reviewVideoSchema).optional(),
    videos_amount: integerSchema.optional(),
  });
