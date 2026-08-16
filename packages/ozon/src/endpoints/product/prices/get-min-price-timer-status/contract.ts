import {
  array,
  boolean,
  literal,
  object,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { GetProductMinPriceTimerStatusResponse } from "./types.js";

const status = object({
  expired_at: union([literal(""), rfc3339DateTimeSchema]).optional(),
  min_price_for_auto_actions_enabled: boolean().optional(),
  product_id: integerSchema.optional(),
});

export const getProductMinPriceTimerStatusResponseSchema: Schema<GetProductMinPriceTimerStatusResponse> =
  object({
    statuses: array(status).optional(),
  });
