import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListAvailableFbsCarriagesResponse } from "./types.js";
const errorSchema = object({
  code: string().optional(),
  status: string().optional(),
});
const carriageSchema = object({
  carriage_id: integerSchema.optional(),
  carriage_postings_count: integerSchema.optional(),
  carriage_status: string().optional(),
  cutoff_at: string().optional(),
  delivery_method_id: integerSchema.optional(),
  delivery_method_name: string().optional(),
  errors: array(errorSchema).optional(),
  first_mile_type: string().optional(),
  has_entrusted_acceptance: boolean().optional(),
  mandatory_postings_count: integerSchema.optional(),
  mandatory_packaged_count: integerSchema.optional(),
  recommended_time_local: string().optional(),
  recommended_time_utc_offset_in_minutes: number().optional(),
  tpl_provider_icon_url: string().optional(),
  tpl_provider_name: string().optional(),
  warehouse_city: string().optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
  warehouse_timezone: string().optional(),
});
export const listAvailableFbsCarriagesResponseSchema: Schema<ListAvailableFbsCarriagesResponse> =
  object({ result: array(carriageSchema).optional() });
