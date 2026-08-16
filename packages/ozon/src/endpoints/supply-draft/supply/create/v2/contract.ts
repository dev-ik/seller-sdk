import { array, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { draftSupplyCreateErrorSchema } from "../../shared/contract.js";
import type { CreateSupplyOrderFromDraftResponse } from "./types.js";
export const createSupplyOrderFromDraftResponseSchema: Schema<CreateSupplyOrderFromDraftResponse> =
  object({
    draft_id: integerSchema.optional(),
    error_reasons: array(draftSupplyCreateErrorSchema).optional(),
  });
