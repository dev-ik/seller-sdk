import { object, string, type Schema } from "@safe-shape/core";
import { cargoDeleteErrorSchema } from "../../shared/contract.js";
import type { DeleteSupplyCargoesResponse } from "./types.js";
export const deleteSupplyCargoesResponseSchema: Schema<DeleteSupplyCargoesResponse> =
  object({
    errors: cargoDeleteErrorSchema.optional(),
    operation_id: string().optional(),
  });
