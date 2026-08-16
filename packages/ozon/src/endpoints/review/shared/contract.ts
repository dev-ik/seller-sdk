import { array, boolean, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";

export const reviewPhotoSchema = object({
  height: integerSchema.optional(),
  url: string().optional(),
  width: integerSchema.optional(),
});

export const reviewVideoSchema = object({
  height: integerSchema.optional(),
  preview_url: string().optional(),
  short_video_preview_url: string().optional(),
  url: string().optional(),
  width: integerSchema.optional(),
});

export const reviewSummaryV1Schema = object({
  comments_amount: integerSchema.optional(),
  id: string().optional(),
  is_rating_participant: boolean().optional(),
  order_status: string().optional(),
  photos_amount: integerSchema.optional(),
  published_at: rfc3339DateTimeSchema.optional(),
  rating: integerSchema.optional(),
  sku: integerSchema.optional(),
  status: string().optional(),
  text: string().optional(),
  videos_amount: integerSchema.optional(),
});

export const reviewDetailsV1Schema = object({
  comments_amount: integerSchema.optional(),
  dislikes_amount: integerSchema.optional(),
  id: string().optional(),
  is_rating_participant: boolean().optional(),
  likes_amount: integerSchema.optional(),
  order_status: string().optional(),
  photos: array(reviewPhotoSchema).optional(),
  photos_amount: integerSchema.optional(),
  published_at: rfc3339DateTimeSchema.optional(),
  rating: integerSchema.optional(),
  sku: integerSchema.optional(),
  status: string().optional(),
  text: string().optional(),
  videos: array(reviewVideoSchema).optional(),
  videos_amount: integerSchema.optional(),
});
