import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import { deliveryCoordinatesSchema } from "../../../shared/v1/contract.js";
import type {
  GetDeliveryPointInfoV1Response,
  OzonDeliveryPointMethod,
  OzonDeliveryPointWorkingPeriod,
} from "./types.js";

const timeSchema = object({
  hours: integerSchema.optional(),
  minutes: integerSchema.optional(),
});

const workingPeriodSchema: Schema<OzonDeliveryPointWorkingPeriod> = object({
  max: timeSchema.optional(),
  min: timeSchema.optional(),
});

const methodSchema: Schema<OzonDeliveryPointMethod> = object({
  address: string().optional(),
  address_details: object({
    city: string().optional(),
    house: string().optional(),
    region: string().optional(),
    street: string().optional(),
  }).optional(),
  coordinates: deliveryCoordinatesSchema.optional(),
  delivery_type: object({
    id: integerSchema.optional(),
    name: string().optional(),
  }).optional(),
  description: string().optional(),
  fitting_rooms_count: integerSchema.optional(),
  holidays: array(
    object({
      begin: rfc3339DateTimeSchema.optional(),
      end: rfc3339DateTimeSchema.optional(),
    }),
  ).optional(),
  holidays_filled: boolean().optional(),
  images: array(string()).optional(),
  location_id: string().optional(),
  map_point_id: integerSchema.optional(),
  name: string().optional(),
  properties: array(
    object({
      enabled: boolean().optional(),
      name: string().optional(),
    }),
  ).optional(),
  pvz_rating: integerSchema.optional(),
  storage_period: integerSchema.optional(),
  working_hours: array(
    object({
      date: rfc3339DateTimeSchema.optional(),
      periods: array(workingPeriodSchema).optional(),
    }),
  ).optional(),
});

export const getDeliveryPointInfoV1ResponseSchema: Schema<GetDeliveryPointInfoV1Response> =
  object({
    points: array(
      object({
        delivery_method: methodSchema.optional(),
        enabled: boolean().optional(),
      }),
    ).optional(),
  });
