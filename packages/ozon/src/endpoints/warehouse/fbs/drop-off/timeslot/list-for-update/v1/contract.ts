import { array, object, type Schema } from "@safe-shape/core";
import { warehouseTimeslotSchema } from "../../../../shared/v1/contract.js";
import type { ListDropOffTimeslotsForWarehouseUpdateV1Response } from "./types.js";

export const listDropOffTimeslotsForWarehouseUpdateV1ResponseSchema: Schema<ListDropOffTimeslotsForWarehouseUpdateV1Response> =
  object({ timeslots: array(warehouseTimeslotSchema).optional() });
