import { number, object, string, type Schema } from "@safe-shape/core";
import type { GetFbsPostingRestrictionsV1Response } from "./types.js";
export const getFbsPostingRestrictionsV1ResponseSchema: Schema<GetFbsPostingRestrictionsV1Response> =
  object({
    result: object({
      height: number().optional(),
      length: number().optional(),
      max_posting_price: number().optional(),
      max_posting_weight: number().optional(),
      min_posting_price: number().optional(),
      min_posting_weight: number().optional(),
      posting_number: string().optional(),
      width: number().optional(),
    }).optional(),
  });
