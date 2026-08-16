import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetFboPostingMarksResponse } from "./types.js";

const issuedExemplarSchema = object({
  exemplar_id: integerSchema.optional(),
  mandatory_marks: array(string()).optional(),
  posting_number: string().optional(),
  sku: integerSchema.optional(),
});

const nonIssuedExemplarSchema = object({
  exemplar_id: integerSchema.optional(),
  posting_number: string().optional(),
  sku: integerSchema.optional(),
});

/** @internal */
export const getFboPostingMarksResponseSchema: Schema<GetFboPostingMarksResponse> =
  object({
    invalid_postings: array(string()).optional(),
    issued_exemplars: array(issuedExemplarSchema).optional(),
    non_issued_exemplars: array(nonIssuedExemplarSchema).optional(),
  });
