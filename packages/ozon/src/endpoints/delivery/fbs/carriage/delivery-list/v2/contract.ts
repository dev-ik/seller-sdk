import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListFbsCarriageDeliveriesV2Response } from "./types.js";

const feeSchema = object({
  currency_code: string().optional(),
  value: number().optional(),
});
const carriageSchema = object({
  all_blr_traceable: boolean().optional(),
  available_actions: array(string()).optional(),
  carriage_volume: number().optional(),
  id: integerSchema.optional(),
  pickup_fee: feeSchema.optional(),
  postings_count: integerSchema.optional(),
  quantum_count: integerSchema.optional(),
  status: string().optional(),
});
const errorSchema = object({
  code: string().optional(),
  description: string().optional(),
  status: string().optional(),
});
const methodSchema = object({
  carriage_postings_count: integerSchema.optional(),
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
  is_optional_carriage: boolean().optional(),
  is_presort: boolean().optional(),
  is_rfbs: boolean().optional(),
  mandatory_packaged_count: integerSchema.optional(),
  mandatory_postings_count: integerSchema.optional(),
  optional_packaged_count: integerSchema.optional(),
  recommended_time_local: string().optional(),
  recommended_time_utc_offset_in_minutes: integerSchema.optional(),
  timeslot_from: string().optional(),
  timeslot_to: string().optional(),
  tpl_provider_icon_url: string().optional(),
  tpl_provider_name: string().optional(),
  warehouse_city: string().optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
});
export const listFbsCarriageDeliveriesV2ResponseSchema: Schema<ListFbsCarriageDeliveriesV2Response> =
  object({
    cursor: string().optional(),
    has_next: boolean().optional(),
    methods: array(methodSchema).optional(),
  });
