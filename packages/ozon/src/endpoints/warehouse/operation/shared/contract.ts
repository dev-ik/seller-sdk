import { object, string, type Schema } from "@safe-shape/core";
import type { OzonWarehouseOperationResponse } from "./types.js";

export const warehouseOperationResponseSchema: Schema<OzonWarehouseOperationResponse> =
  object({ operation_id: string().optional() });
