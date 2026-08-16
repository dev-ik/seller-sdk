import { object, string, type Schema } from "@safe-shape/core";
import { cargoDeleteErrorsSchema } from "../shared/v2/contract.js";
import type { DeleteCargoesV2Response } from "./types.js";
export const deleteCargoesV2ResponseSchema: Schema<DeleteCargoesV2Response> =
  object({
    errors: cargoDeleteErrorsSchema.optional(),
    operation_id: string().optional(),
  });
