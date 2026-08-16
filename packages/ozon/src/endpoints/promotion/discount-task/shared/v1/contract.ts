import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { OzonDiscountTasksChangeResponse } from "./types.js";

const failure = object({
  task_id: integerSchema.optional(),
  error_for_user: string().optional(),
});

export const discountTasksChangeResponseSchema: Schema<OzonDiscountTasksChangeResponse> =
  object({
    result: object({
      fail_details: array(failure).optional(),
      success_count: integerSchema.optional(),
      fail_count: integerSchema.optional(),
    }).optional(),
  });
