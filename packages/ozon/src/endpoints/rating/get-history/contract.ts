import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";
import type { GetRatingHistoryResponse } from "./types.js";

const scoreSchema = object({
  date: rfc3339DateTimeSchema.optional(),
  rating_value: number().optional(),
  value: integerSchema.optional(),
});

const premiumScoresSchema = object({
  rating: string().optional(),
  scores: array(scoreSchema).optional(),
});

const statusSchema = object({
  danger: boolean().optional(),
  premium: boolean().optional(),
  warning: boolean().optional(),
});

const valueSchema = object({
  date_from: rfc3339DateTimeSchema.optional(),
  date_to: rfc3339DateTimeSchema.optional(),
  status: statusSchema.optional(),
  value: number().optional(),
});

const ratingSchema = object({
  danger_threshold: number().optional(),
  premium_threshold: number().optional(),
  rating: string().optional(),
  values: array(valueSchema).optional(),
  warning_threshold: number().optional(),
});

/** @internal */
export const getRatingHistoryResponseSchema: Schema<GetRatingHistoryResponse> =
  object({
    premium_scores: array(premiumScoresSchema).optional(),
    ratings: array(ratingSchema).optional(),
  });
