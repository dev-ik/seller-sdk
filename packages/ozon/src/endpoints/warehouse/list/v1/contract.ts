import {
  array,
  boolean,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ListWarehousesV1Response } from "./types.js";

const firstMileSchema = object({
  dropoff_point_id: string().optional(),
  dropoff_timeslot_id: integerSchema.optional(),
  first_mile_is_changing: boolean().optional(),
  first_mile_type: union([literal("DropOff"), literal("Pickup")]).optional(),
});

const warehouseSchema = object({
  has_entrusted_acceptance: boolean().optional(),
  is_rfbs: boolean().optional(),
  name: string().optional(),
  warehouse_id: integerSchema.optional(),
  can_print_act_in_advance: boolean().optional(),
  first_mile_type: firstMileSchema.optional(),
  has_postings_limit: boolean().optional(),
  is_karantin: boolean().optional(),
  is_kgt: boolean().optional(),
  is_economy: boolean().optional(),
  is_able_to_set_price: boolean().optional(),
  is_presorted: boolean().optional(),
  is_timetable_editable: boolean().optional(),
  min_postings_limit: integerSchema.optional(),
  postings_limit: integerSchema.optional(),
  min_working_days: integerSchema.optional(),
  status: string().optional(),
  working_days: array(string()).optional(),
});

export const listWarehousesV1ResponseSchema: Schema<ListWarehousesV1Response> =
  object({
    result: array(warehouseSchema).optional(),
  });
