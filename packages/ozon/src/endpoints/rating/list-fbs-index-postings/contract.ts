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
import type { ListFbsRatingIndexPostingsResponse } from "./types.js";

const postingErrorTypeSchema = union([
  literal("UNSPECIFIED"),
  literal("SELLER_CANCELLATION"),
  literal("SELLER_DELAY"),
]);

const postingErrorSchema = object({
  charge_percent: number().optional(),
  charge_price: number().optional(),
  charge_price_currency_code: string().optional(),
  delivery_schema: string().optional(),
  error_at: rfc3339DateTimeSchema.optional(),
  has_grace_status: boolean().optional(),
  index: number().optional(),
  posting_error_type: postingErrorTypeSchema.optional(),
  posting_number: string().optional(),
  product_price: number().optional(),
  product_price_currency_code: string().optional(),
});

/** @internal */
export const listFbsRatingIndexPostingsResponseSchema: Schema<ListFbsRatingIndexPostingsResponse> =
  object({
    cursor: string().optional(),
    errors: array(postingErrorSchema).optional(),
    has_next: boolean().optional(),
  });
