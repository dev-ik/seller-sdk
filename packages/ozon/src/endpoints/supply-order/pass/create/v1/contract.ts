import { array, object, string, type Schema } from "@safe-shape/core";
import { supplyOrderPassErrorSchema } from "../../../shared/contract.js";
import type { CreateSupplyOrderPassResponse } from "./types.js";
export const createSupplyOrderPassResponseSchema: Schema<CreateSupplyOrderPassResponse> =
  object({
    error_reasons: array(supplyOrderPassErrorSchema).optional(),
    operation_id: string().optional(),
  });
