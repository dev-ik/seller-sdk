import { object, type Schema } from "@safe-shape/core";
import {
  cargoDeleteErrorsSchema,
  cargoDeleteStatusSchema,
} from "../../shared/v2/contract.js";
import type { GetCargoesDeleteStatusV2Response } from "./types.js";
export const getCargoesDeleteStatusV2ResponseSchema: Schema<GetCargoesDeleteStatusV2Response> =
  object({
    errors: cargoDeleteErrorsSchema.optional(),
    status: cargoDeleteStatusSchema.optional(),
  });
