import {
  array,
  boolean,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { ListOzonWarehousesResponse } from "./types.js";

const warehouseTypeSchema = union([
  literal("UNSPECIFIED"),
  literal("FULL_FILLMENT"),
  literal("FULL_FILLMENT_RETURNS"),
  literal("FULL_FILLMENT_DEFECT"),
  literal("EXPRESS_DARK_STORE"),
  literal("CROSS_DOCK"),
  literal("SORTING_CENTER"),
  literal("PHARMACY"),
  literal("DISTRIBUTION_CENTER"),
  literal("ORDERS_RECEIVING_POINT"),
  literal("OUTSOURCE_FF"),
  literal("B2B"),
  literal("EXTERNAL_FF"),
]);

const warehouseSchema = object({
  address: string().optional(),
  country_iso_numeric: integerSchema.optional(),
  is_active: boolean().optional(),
  is_cross_dock: boolean().optional(),
  is_distribution_center: boolean().optional(),
  is_edo: boolean().optional(),
  is_express: boolean().optional(),
  is_for_supply: boolean().optional(),
  name: string().optional(),
  short_name: string().optional(),
  timezone: string().optional(),
  warehouse_id: integerSchema.optional(),
  warehouse_type: warehouseTypeSchema.optional(),
});

/** @internal */
export const listOzonWarehousesResponseSchema: Schema<ListOzonWarehousesResponse> =
  object({
    warehouses: array(warehouseSchema).optional(),
  });
