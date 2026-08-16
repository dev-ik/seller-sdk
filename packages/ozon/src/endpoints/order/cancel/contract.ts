import { object, string, type Schema } from "@safe-shape/core";
import type { CancelOrderResponse } from "./types.js";

/** @internal */
export const cancelOrderResponseSchema: Schema<CancelOrderResponse> = object({
  message: string().optional(),
});
