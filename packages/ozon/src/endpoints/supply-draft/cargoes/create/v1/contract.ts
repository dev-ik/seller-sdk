import { object, string, type Schema } from "@safe-shape/core";
import { cargoCreateErrorsSchema } from "../../shared/contract.js";
import type { CreateSupplyCargoesResponse } from "./types.js";
export const createSupplyCargoesResponseSchema: Schema<CreateSupplyCargoesResponse> =
  object({
    operation_id: string().optional(),
    errors: cargoCreateErrorsSchema.optional(),
  });
