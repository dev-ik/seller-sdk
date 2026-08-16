import {
  array,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type {
  OzonReturnPointType,
  OzonReturnPointWorkingDay,
  OzonWarehouseReturnPoint,
} from "./types.js";

export const returnPointTypeSchema: Schema<OzonReturnPointType> = union([
  literal("UNSPECIFIED"),
  literal("PVZ"),
  literal("PPZ"),
  literal("SC"),
]);

const workingDaySchema: Schema<OzonReturnPointWorkingDay> = union([
  literal("UNSPECIFIED"),
  literal("MONDAY"),
  literal("TUESDAY"),
  literal("WEDNESDAY"),
  literal("THURSDAY"),
  literal("FRIDAY"),
  literal("SATURDAY"),
  literal("SUNDAY"),
]);

export const warehouseReturnPointSchema: Schema<OzonWarehouseReturnPoint> =
  object({
    address: string().optional(),
    coordinates: object({
      latitude: number().optional(),
      longitude: number().optional(),
    }).optional(),
    id: integerSchema.optional(),
    name: string().optional(),
    type: returnPointTypeSchema.optional(),
    utc_offset: integerSchema.optional(),
    working_days: array(
      object({
        day: workingDaySchema.optional(),
        from: string().optional(),
        to: string().optional(),
      }),
    ).optional(),
  });
