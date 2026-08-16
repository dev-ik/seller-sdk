import { array, object, string, type Schema } from "@safe-shape/core";
import { supplyOrderTimeslotUpdateErrorSchema } from "../../../shared/contract.js";
import type { UpdateSupplyOrderTimeslotResponse } from "./types.js";
export const updateSupplyOrderTimeslotResponseSchema: Schema<UpdateSupplyOrderTimeslotResponse> =
  object({
    errors: array(supplyOrderTimeslotUpdateErrorSchema).optional(),
    operation_id: string().optional(),
  });
