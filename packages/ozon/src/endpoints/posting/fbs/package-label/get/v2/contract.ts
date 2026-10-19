import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetFbsPackageLabelBatchV2Response } from "./types.js";
export const getFbsPackageLabelBatchV2ResponseSchema: Schema<GetFbsPackageLabelBatchV2Response> =
  object({
    error: object({
      code: string().optional(),
      message: string().optional(),
    }).optional(),
    file_url: string().optional(),
    status: object({
      code: string().optional(),
      postings_count: integerSchema.optional(),
      printed_postings_count: integerSchema.optional(),
      unprinted_postings: array(
        object({
          message: string().optional(),
          posting_number: string().optional(),
        }),
      ).optional(),
    }).optional(),
  });
