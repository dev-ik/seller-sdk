import { array, boolean, object, type Schema } from "@safe-shape/core";
import { warehouseTimeslotSchema } from "../../../../shared/v1/contract.js";
import type { ListPickUpTimeslotsForWarehouseCreateV1Response } from "./types.js";

export const listPickUpTimeslotsForWarehouseCreateV1ResponseSchema: Schema<ListPickUpTimeslotsForWarehouseCreateV1Response> =
  object({
    is_pickup_supported: boolean().optional(),
    timeslots: array(warehouseTimeslotSchema).optional(),
  });
