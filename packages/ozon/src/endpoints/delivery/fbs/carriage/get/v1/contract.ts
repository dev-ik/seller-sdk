import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetFbsCarriageResponse } from "./types.js";
export const getFbsCarriageResponseSchema: Schema<GetFbsCarriageResponse> =
  object({
    act_type: string().optional(),
    all_blr_traceable: boolean().optional(),
    is_waybill_enabled: boolean().optional(),
    is_econom: boolean().optional(),
    arrival_pass_ids: array(string()).optional(),
    available_actions: array(string()).optional(),
    cancel_availability: object({
      is_cancel_available: boolean().optional(),
      reason: string().optional(),
    }).optional(),
    carriage_id: integerSchema.optional(),
    company_id: integerSchema.optional(),
    containers_count: integerSchema.optional(),
    created_at: string().optional(),
    delivery_method_id: integerSchema.optional(),
    departure_date: string().optional(),
    first_mile_type: string().optional(),
    has_postings_for_next_carriage: boolean().optional(),
    integration_type: string().optional(),
    is_container_label_printed: boolean().optional(),
    is_partial: boolean().optional(),
    partial_num: integerSchema.optional(),
    retry_count: integerSchema.optional(),
    status: string().optional(),
    tpl_provider_id: integerSchema.optional(),
    updated_at: string().optional(),
    warehouse_id: integerSchema.optional(),
  });
