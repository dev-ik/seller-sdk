import { array, object, string, type Schema } from "@safe-shape/core";
import type { CreateOrderResponse } from "./types.js";

/** @internal */
export const createOrderResponseSchema: Schema<CreateOrderResponse> = object({
  order_number: string().optional(),
  postings: array(string()).optional(),
});
