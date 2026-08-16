import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetFbsPackageLabelBatchV1Response } from "./types.js";
export const getFbsPackageLabelBatchV1ResponseSchema: Schema<GetFbsPackageLabelBatchV1Response> =
  object({
    result: object({
      error: string().optional(),
      file_url: string().optional(),
      printed_postings_count: integerSchema.optional(),
      status: string().optional(),
      unprinted_postings: array(
        object({
          msg: string().optional(),
          posting_number: string().optional(),
        }),
      ).optional(),
      unprinted_postings_count: integerSchema.optional(),
    }).optional(),
  });
