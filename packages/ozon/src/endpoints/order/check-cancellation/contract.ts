import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import type { CheckOrderCancellationResponse } from "./types.js";

const postingGroupSchema = object({
  posting_numbers: array(string()).optional(),
});

const postingSchema = object({
  cancellable: boolean().optional(),
  posting_number: string().optional(),
  why_not_cancellable: string().optional(),
});

/** @internal */
export const checkOrderCancellationResponseSchema: Schema<CheckOrderCancellationResponse> =
  object({
    cancellable: boolean().optional(),
    order_number: string().optional(),
    posting_groups: array(postingGroupSchema).optional(),
    postings: array(postingSchema).optional(),
  });
