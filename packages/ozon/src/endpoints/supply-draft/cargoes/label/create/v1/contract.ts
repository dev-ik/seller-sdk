import { object, string, type Schema } from "@safe-shape/core";
import { cargoLabelErrorsSchema } from "../../../shared/contract.js";
import type { CreateSupplyCargoLabelsResponse } from "./types.js";
export const createSupplyCargoLabelsResponseSchema: Schema<CreateSupplyCargoLabelsResponse> =
  object({
    operation_id: string().optional(),
    errors: cargoLabelErrorsSchema.optional(),
  });
