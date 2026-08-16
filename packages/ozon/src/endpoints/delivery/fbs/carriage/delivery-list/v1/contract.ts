import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListFbsCarriageDeliveriesV1Response } from "./types.js";

const errorSchema = object({
  code: string().optional(),
  description: string().optional(),
  status: string().optional(),
});
const carriageSchema = object({
  id: string().optional(),
  postings_count: integerSchema.optional(),
  quantum_count: integerSchema.optional(),
  status: string().optional(),
});
const methodSchema = object({
  assembly_list_availability: boolean().optional(),
  can_create_another_carriage: boolean().optional(),
  carriage_postings_count: integerSchema.optional(),
  carriage_quantum_count: integerSchema.optional(),
  carriages: array(carriageSchema).optional(),
  cut_in: string().optional(),
  cutoff_at: string().optional(),
  delivery_method_id: integerSchema.optional(),
  delivery_method_name: string().optional(),
  delivery_method_status: string().optional(),
  departure_date: string().optional(),
  dropoff_address: string().optional(),
  dropoff_change_availability: string().optional(),
  dropoff_point_id: integerSchema.optional(),
  dropoff_point_type: string().optional(),
  errors: array(errorSchema).optional(),
  first_mile_changing: boolean().optional(),
  first_mile_type: string().optional(),
  has_entrusted_acceptance: boolean().optional(),
  integration_type: string().optional(),
  is_presort: boolean().optional(),
  is_rfbs: boolean().optional(),
  mandatory_packaged_count: integerSchema.optional(),
  mandatory_packaged_quantum_count: integerSchema.optional(),
  mandatory_postings_count: integerSchema.optional(),
  mandatory_quantum_count: integerSchema.optional(),
  optional_packaged_count: integerSchema.optional(),
  postings_for_another_carriage_count: integerSchema.optional(),
  quantum_for_another_carriage_count: integerSchema.optional(),
  recommended_time_local: string().optional(),
  recommended_time_utc_offset_in_minutes: number().optional(),
  timeslot_from: string().optional(),
  timeslot_to: string().optional(),
  tpl_provider_icon_url: string().optional(),
  tpl_provider_name: string().optional(),
  warehouse_city: string().optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
});

export const listFbsCarriageDeliveriesV1ResponseSchema: Schema<ListFbsCarriageDeliveriesV1Response> =
  object({ result: array(methodSchema).optional() });
