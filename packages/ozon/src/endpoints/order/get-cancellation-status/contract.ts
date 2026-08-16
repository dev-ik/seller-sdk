import { array, object, string, type Schema } from "@safe-shape/core";
import type { GetOrderCancellationStatusResponse } from "./types.js";

/** @internal */
export const getOrderCancellationStatusResponseSchema: Schema<GetOrderCancellationStatusResponse> =
  object({
    order_number: string().optional(),
    posting_number: array(string()).optional(),
    state: string().optional(),
  });
