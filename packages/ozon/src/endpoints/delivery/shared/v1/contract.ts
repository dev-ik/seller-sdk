import { number, object, type Schema } from "@safe-shape/core";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type {
  OzonDeliveryCoordinates,
  OzonDeliveryDateRange,
} from "./types.js";

export const deliveryCoordinatesSchema: Schema<OzonDeliveryCoordinates> =
  object({
    lat: number().optional(),
    long: number().optional(),
  });

export const deliveryDateRangeSchema: Schema<OzonDeliveryDateRange> = object({
  from: rfc3339DateTimeSchema.optional(),
  to: rfc3339DateTimeSchema.optional(),
});
