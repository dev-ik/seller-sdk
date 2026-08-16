import { array, literal, object, union, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { draftSupplyCreateStatusErrorSchema } from "../../shared/contract.js";
import type { GetSupplyOrderFromDraftStatusResponse } from "./types.js";
export const getSupplyOrderFromDraftStatusResponseSchema: Schema<GetSupplyOrderFromDraftStatusResponse> =
  object({
    error_reasons: array(draftSupplyCreateStatusErrorSchema).optional(),
    order_id: integerSchema.optional(),
    status: union([
      literal("UNSPECIFIED"),
      literal("SUCCESS"),
      literal("IN_PROGRESS"),
      literal("FAILED"),
    ]).optional(),
  });
