import { array, literal, object, union, type Schema } from "@safe-shape/core";
import { supplyOrderPassErrorSchema } from "../../../shared/contract.js";
import type { GetSupplyOrderPassStatusResponse } from "./types.js";
const resultSchema = union([
  literal("Unknown"),
  literal("Success"),
  literal("InProgress"),
  literal("Failed"),
]);
export const getSupplyOrderPassStatusResponseSchema: Schema<GetSupplyOrderPassStatusResponse> =
  object({
    errors: array(supplyOrderPassErrorSchema).optional(),
    result: resultSchema.optional(),
  });
