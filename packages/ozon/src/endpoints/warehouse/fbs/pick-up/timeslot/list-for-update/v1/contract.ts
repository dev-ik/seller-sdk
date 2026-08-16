import { array, object, type Schema } from "@safe-shape/core";
import { warehouseTimeslotSchema } from "../../../../shared/v1/contract.js";
import type { ListPickUpTimeslotsForWarehouseUpdateV1Response } from "./types.js";

export const listPickUpTimeslotsForWarehouseUpdateV1ResponseSchema: Schema<ListPickUpTimeslotsForWarehouseUpdateV1Response> =
  object({ timeslots: array(warehouseTimeslotSchema).optional() });
