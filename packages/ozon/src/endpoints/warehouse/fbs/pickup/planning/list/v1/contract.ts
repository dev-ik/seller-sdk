import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../../../contracts/rfc3339-date-time.js";
import type {
  ListFbsPickupPlanningV1Response,
  OzonFbsPickupPlanningWarehouse,
} from "./types.js";

const warehouseSchema: Schema<OzonFbsPickupPlanningWarehouse> = object({
  can_modify_pickup_plan: boolean().optional(),
  has_postings_to_be_planned: boolean().optional(),
  is_pickup_planned: boolean().optional(),
  last_pickup_plan_date_at: rfc3339DateTimeSchema.optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_name: string().optional(),
});

export const listFbsPickupPlanningV1ResponseSchema: Schema<ListFbsPickupPlanningV1Response> =
  object({
    result: object({
      warehouses: array(warehouseSchema).optional(),
    }).optional(),
  });
