import { object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetFbsPostingTimeslotChangeRestrictionsResponse } from "./types.js";

export const getFbsPostingTimeslotChangeRestrictionsResponseSchema: Schema<GetFbsPostingTimeslotChangeRestrictionsResponse> =
  object({
    delivery_interval: object({
      begin: string().optional(),
      end: string().optional(),
    }).optional(),
    remaining_changes_count: integerSchema.optional(),
  });
