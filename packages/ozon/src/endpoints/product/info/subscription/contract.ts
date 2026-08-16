import { array, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetProductSubscriptionCountsResponse } from "./types.js";

const subscriptionCount = object({
  count: integerSchema.optional(),
  sku: integerSchema.optional(),
});

export const getProductSubscriptionCountsResponseSchema: Schema<GetProductSubscriptionCountsResponse> =
  object({
    result: array(subscriptionCount).optional(),
  });
