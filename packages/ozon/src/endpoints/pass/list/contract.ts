import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";
import type { ListPassesResponse } from "./types.js";

const arrivalPass = object({
  arrival_pass_id: integerSchema.optional(),
  arrival_reasons: array(string()).optional(),
  arrival_time: rfc3339DateTimeSchema.optional(),
  driver_name: string().optional(),
  driver_phone: string().optional(),
  dropoff_point_id: integerSchema.optional(),
  is_active: boolean().optional(),
  vehicle_license_plate: string().optional(),
  vehicle_model: string().optional(),
  warehouse_id: integerSchema.optional(),
});

export const listPassesResponseSchema: Schema<ListPassesResponse> = object({
  arrival_passes: array(arrivalPass).optional(),
  cursor: string().optional(),
});
