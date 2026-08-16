import {
  array,
  boolean,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";
import type { GetRatingSummaryResponse } from "./types.js";

const changeSchema = object({
  direction: string().optional(),
  meaning: string().optional(),
});

const itemSchema = object({
  change: changeSchema.optional(),
  current_value: number().optional(),
  name: string().optional(),
  past_value: number().optional(),
  rating: string().optional(),
  rating_direction: string().optional(),
  status: string().optional(),
  value_type: string().optional(),
});

const groupSchema = object({
  group_name: string().optional(),
  items: array(itemSchema).optional(),
});

const localizationIndexSchema = object({
  calculation_date: rfc3339DateTimeSchema.optional(),
  localization_percentage: integerSchema.optional(),
});

/** @internal */
export const getRatingSummaryResponseSchema: Schema<GetRatingSummaryResponse> =
  object({
    groups: array(groupSchema).optional(),
    localization_index: union([
      localizationIndexSchema,
      array(localizationIndexSchema),
    ]).optional(),
    penalty_score_exceeded: boolean().optional(),
    premium: boolean().optional(),
    premium_plus: boolean().optional(),
  });
