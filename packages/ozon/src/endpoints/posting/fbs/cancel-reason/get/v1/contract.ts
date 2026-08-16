import { array, object, string, type Schema } from "@safe-shape/core";
import { fbsCancelReasonSchema } from "../../shared/contract.js";
import type { GetFbsPostingCancelReasonsV1Response } from "./types.js";
export const getFbsPostingCancelReasonsV1ResponseSchema: Schema<GetFbsPostingCancelReasonsV1Response> =
  object({
    result: array(
      object({
        posting_number: string().optional(),
        reasons: array(fbsCancelReasonSchema).optional(),
      }),
    ).optional(),
  });
