import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetFbsActStatusResponse } from "./types.js";
export const getFbsActStatusResponseSchema: Schema<GetFbsActStatusResponse> =
  object({
    result: object({
      act_type: string().optional(),
      added_to_act: array(string()).optional(),
      removed_from_act: array(string()).optional(),
      status: string().optional(),
      is_partial: boolean().optional(),
      has_postings_for_next_carriage: boolean().optional(),
      partial_num: integerSchema.optional(),
    }).optional(),
  });
