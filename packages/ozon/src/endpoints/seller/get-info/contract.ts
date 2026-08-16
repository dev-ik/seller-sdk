import {
  array,
  boolean,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";
import type { GetSellerInfoResponse } from "./types.js";

const taxSystemSchema = union([
  literal("UNKNOWN"),
  literal("UNSPECIFIED"),
  literal("OSNO"),
  literal("USN"),
  literal("NPD"),
  literal("AUSN"),
  literal("PSN"),
]);

const subscriptionTypeSchema = union([
  literal("UNKNOWN"),
  literal("UNSPECIFIED"),
  literal("PREMIUM"),
  literal("PREMIUM_LITE"),
  literal("PREMIUM_PLUS"),
  literal("PREMIUM_PRO"),
]);

const ratingStatusSchema = union([
  literal("UNKNOWN"),
  literal("OK"),
  literal("WARNING"),
  literal("CRITICAL"),
]);

const ratingTypeSchema = union([
  literal("UNKNOWN"),
  literal("INDEX"),
  literal("PERCENT"),
  literal("TIME"),
  literal("RATIO"),
  literal("REVIEW_SCORE"),
  literal("COUNT"),
]);

const companySchema = object({
  country: string().optional(),
  currency: string().optional(),
  inn: string().optional(),
  legal_name: string().optional(),
  name: string().optional(),
  ogrn: string().optional(),
  ownership_form: string().optional(),
  tax_system: taxSystemSchema.optional(),
});

const ratingThresholdStatusSchema = object({
  danger: boolean().optional(),
  premium: boolean().optional(),
  warning: boolean().optional(),
});

const ratingValueSchema = object({
  date_from: rfc3339DateTimeSchema.optional(),
  date_to: rfc3339DateTimeSchema.optional(),
  formatted: string().optional(),
  status: ratingThresholdStatusSchema.optional(),
  value: number().optional(),
});

const ratingSchema = object({
  current_value: ratingValueSchema.optional(),
  name: string().optional(),
  past_value: ratingValueSchema.optional(),
  rating: string().optional(),
  status: ratingStatusSchema.optional(),
  value_type: ratingTypeSchema.optional(),
});

const subscriptionSchema = object({
  is_premium: boolean().optional(),
  type: subscriptionTypeSchema.optional(),
});

/** @internal */
export const getSellerInfoResponseSchema: Schema<GetSellerInfoResponse> =
  object({
    company: companySchema.optional(),
    ratings: array(ratingSchema).optional(),
    subscription: subscriptionSchema.optional(),
  });
