import { array, literal, object, union, type Schema } from "@safe-shape/core";
import { string } from "@safe-shape/core";
import type { AcceptSupplyOrderActResponse } from "./types.js";
const reason = union([
  literal("UNSPECIFIED"),
  literal("INVALID_STATE"),
  literal("SUPPLY_WITH_UTD"),
]);
export const acceptSupplyOrderActResponseSchema: Schema<AcceptSupplyOrderActResponse> =
  object({
    error_reasons: array(reason).optional(),
    operation_id: string().optional(),
  });
