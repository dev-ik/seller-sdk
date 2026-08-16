import { array, object, string, type Schema } from "@safe-shape/core";
import {
  supplyContentUpdateStatusErrorSchema,
  supplyContentUpdateStatusSchema,
} from "../../shared/contract.js";
import type { GetSupplyOrderContentUpdateStatusResponse } from "./types.js";
export const getSupplyOrderContentUpdateStatusResponseSchema: Schema<GetSupplyOrderContentUpdateStatusResponse> =
  object({
    errors: array(supplyContentUpdateStatusErrorSchema).optional(),
    new_bundle_id: string().optional(),
    status: supplyContentUpdateStatusSchema.optional(),
  });
