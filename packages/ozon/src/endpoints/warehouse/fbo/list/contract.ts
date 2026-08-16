import {
  array,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { ListFboSupplyWarehousesResponse } from "./types.js";

const warehouseTypeSchema = union([
  literal("WAREHOUSE_TYPE_DELIVERY_POINT"),
  literal("WAREHOUSE_TYPE_ORDERS_RECEIVING_POINT"),
  literal("WAREHOUSE_TYPE_SORTING_CENTER"),
  literal("WAREHOUSE_TYPE_FULL_FILLMENT"),
  literal("WAREHOUSE_TYPE_CROSS_DOCK"),
]);
const warehouseSchema = object({
  address: string().optional(),
  coordinates: object({
    latitude: number().optional(),
    longitude: number().optional(),
  }).optional(),
  name: string().optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_type: warehouseTypeSchema.optional(),
});

export const listFboSupplyWarehousesResponseSchema: Schema<ListFboSupplyWarehousesResponse> =
  object({ search: array(warehouseSchema).optional() });
