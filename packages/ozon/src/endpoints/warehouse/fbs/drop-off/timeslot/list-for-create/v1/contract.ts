import { array, object, type Schema } from "@safe-shape/core";
import { warehouseTimeslotSchema } from "../../../../shared/v1/contract.js";
import type { ListDropOffTimeslotsForWarehouseCreateV1Response } from "./types.js";

export const listDropOffTimeslotsForWarehouseCreateV1ResponseSchema: Schema<ListDropOffTimeslotsForWarehouseCreateV1Response> =
  object({ timeslots: array(warehouseTimeslotSchema).optional() });
