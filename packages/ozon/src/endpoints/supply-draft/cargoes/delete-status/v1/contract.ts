import { literal, object, union, type Schema } from "@safe-shape/core";
import { cargoDeleteErrorSchema } from "../../shared/contract.js";
import type { GetSupplyCargoesDeleteStatusResponse } from "./types.js";
export const getSupplyCargoesDeleteStatusResponseSchema: Schema<GetSupplyCargoesDeleteStatusResponse> =
  object({
    errors: cargoDeleteErrorSchema.optional(),
    status: union([
      literal("SUCCESS"),
      literal("IN_PROGRESS"),
      literal("ERROR"),
    ]).optional(),
  });
