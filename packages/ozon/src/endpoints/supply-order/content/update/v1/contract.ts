import { array, object, string, type Schema } from "@safe-shape/core";
import { supplyContentUpdateErrorSchema } from "../../shared/contract.js";
import type { UpdateSupplyOrderContentResponse } from "./types.js";
export const updateSupplyOrderContentResponseSchema: Schema<UpdateSupplyOrderContentResponse> =
  object({
    errors: array(supplyContentUpdateErrorSchema).optional(),
    operation_id: string().optional(),
  });
