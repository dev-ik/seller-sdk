import {
  array,
  boolean,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListFboSellerWarehousesResponse } from "./types.js";
const day = union([
  literal("UNSPECIFIED"),
  literal("MONDAY"),
  literal("TUESDAY"),
  literal("WEDNESDAY"),
  literal("THURSDAY"),
  literal("FRIDAY"),
  literal("SATURDAY"),
  literal("SUNDAY"),
]);
const address = object({
  address: string().optional(),
  city: string().optional(),
  coordinates: object({
    latitude: number().optional(),
    longitude: number().optional(),
  }).optional(),
  country_code: string().optional(),
  macrolocal_cluster_id: integerSchema.optional(),
  region: string().optional(),
  timezone: string().optional(),
});
const warehouse = object({
  address: address.optional(),
  contacts: object({ phone_numbers: array(string()).optional() }).optional(),
  courier_comment: string().optional(),
  is_active: boolean().optional(),
  is_pickup: boolean().optional(),
  seller_warehouse_id: integerSchema.optional(),
  seller_warehouse_name: string().optional(),
  working_days: array(
    object({
      day: day.optional(),
      time_from_local: string().optional(),
      time_to_local: string().optional(),
    }),
  ).optional(),
});
export const listFboSellerWarehousesResponseSchema: Schema<ListFboSellerWarehousesResponse> =
  object({ warehouses: array(warehouse).optional() });
