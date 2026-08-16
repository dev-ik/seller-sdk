import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";
import type { ListSupplierAvailableWarehousesResponse } from "./types.js";

const capacitySchema = object({
  start: rfc3339DateTimeSchema.optional(),
  end: rfc3339DateTimeSchema.optional(),
  value: integerSchema.optional(),
});
const availableWarehouseSchema = object({
  schedule: object({
    capacity: array(capacitySchema).optional(),
    date: rfc3339DateTimeSchema.optional(),
  }).optional(),
  warehouse: object({
    id: string().optional(),
    name: string().optional(),
  }).optional(),
});

export const listSupplierAvailableWarehousesResponseSchema: Schema<ListSupplierAvailableWarehousesResponse> =
  object({ result: array(availableWarehouseSchema).optional() });
