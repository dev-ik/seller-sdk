import {
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type {
  OzonDropOffPoint,
  OzonDropOffPointType,
  OzonWarehouseTimeslot,
} from "./types.js";

export const dropOffPointTypeSchema: Schema<OzonDropOffPointType> = union([
  literal("PVZ"),
  literal("PPZ"),
  literal("SC"),
]);

export const dropOffPointSchema: Schema<OzonDropOffPoint> = object({
  address: string().optional(),
  coordinates: object({
    latitude: number().optional(),
    longitude: number().optional(),
  }).optional(),
  discount_percent: number().optional(),
  id: string().optional(),
  last_transit_time_local: object({
    hours: integerSchema.optional(),
    minutes: integerSchema.optional(),
    nanos: integerSchema.optional(),
    seconds: integerSchema.optional(),
  }).optional(),
  type: dropOffPointTypeSchema.optional(),
});

export const warehouseTimeslotSchema: Schema<OzonWarehouseTimeslot> = object({
  acceptance_end_time_local: string().optional(),
  acceptance_start_time_local: string().optional(),
  from: string().optional(),
  id: integerSchema.optional(),
  to: string().optional(),
});
