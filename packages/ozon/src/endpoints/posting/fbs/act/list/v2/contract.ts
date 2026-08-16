import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListFbsActsResponse } from "./types.js";
const documentSchema = object({
  created_at: string().optional(),
  document_status: string().optional(),
});
const relatedSchema = object({
  act_of_acceptance: documentSchema.optional(),
  act_of_mismatch: documentSchema.optional(),
  act_of_excess: documentSchema.optional(),
});
const actSchema = object({
  id: integerSchema.optional(),
  delivery_method_id: integerSchema.optional(),
  delivery_method_name: string().optional(),
  integration_type: string().optional(),
  containers_count: integerSchema.optional(),
  status: string().optional(),
  departure_date: string().optional(),
  created_at: string().optional(),
  updated_at: string().optional(),
  act_type: string().optional(),
  is_partial: boolean().optional(),
  has_postings_for_next_carriage: boolean().optional(),
  partial_num: integerSchema.optional(),
  related_docs: relatedSchema.optional(),
});
export const listFbsActsResponseSchema: Schema<ListFbsActsResponse> = object({
  result: array(actSchema).optional(),
});
