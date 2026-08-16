import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { UploadDigitalPostingCodesResponse } from "./types.js";

const errorSchema = object({
  key: string().optional(),
  message: string().optional(),
});

const resultSchema = object({
  failed_exemplars: array(errorSchema).optional(),
  received_qty: integerSchema.optional(),
  rejected_qty: integerSchema.optional(),
  sku: integerSchema.optional(),
});

/** @internal */
export const uploadDigitalPostingCodesResponseSchema: Schema<UploadDigitalPostingCodesResponse> =
  object({
    exemplars_by_sku: array(resultSchema).optional(),
  });
