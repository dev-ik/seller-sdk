import { object, string, type Schema } from "@safe-shape/core";
import type { CancelSupplyOrderResponse } from "./types.js";

export const cancelSupplyOrderResponseSchema: Schema<CancelSupplyOrderResponse> =
  object({ operation_id: string().optional() });
