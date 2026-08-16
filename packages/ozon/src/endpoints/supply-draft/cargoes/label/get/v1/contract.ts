import { literal, object, string, union, type Schema } from "@safe-shape/core";
import { cargoLabelErrorsSchema } from "../../../shared/contract.js";
import type { GetSupplyCargoLabelsResponse } from "./types.js";
export const getSupplyCargoLabelsResponseSchema: Schema<GetSupplyCargoLabelsResponse> =
  object({
    result: object({
      file_guid: string().optional(),
      file_url: string().optional(),
    }).optional(),
    status: union([
      literal("SUCCESS"),
      literal("IN_PROGRESS"),
      literal("FAILED"),
    ]).optional(),
    errors: cargoLabelErrorsSchema.optional(),
  });
