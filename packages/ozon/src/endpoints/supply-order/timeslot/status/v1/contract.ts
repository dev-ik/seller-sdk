import { array, literal, object, union, type Schema } from "@safe-shape/core";
import { supplyOrderTimeslotUpdateErrorSchema } from "../../../shared/contract.js";
import type { GetSupplyOrderTimeslotStatusResponse } from "./types.js";
const statusSchema = union([
  literal("STATUS_UNSPECIFIED"),
  literal("STATUS_ERROR"),
  literal("STATUS_IN_PROGRESS"),
  literal("STATUS_SUCCESS"),
]);
export const getSupplyOrderTimeslotStatusResponseSchema: Schema<GetSupplyOrderTimeslotStatusResponse> =
  object({
    errors: array(supplyOrderTimeslotUpdateErrorSchema).optional(),
    status: statusSchema.optional(),
  });
