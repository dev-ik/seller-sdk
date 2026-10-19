import type {
  OzonFbsCancelReason,
  OzonFbsCancelReasonAvailability,
} from "./types.js";
import { boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";

export const fbsCancelReasonSchema: Schema<OzonFbsCancelReason> = object({
  id: integerSchema.optional(),
  title: string().optional(),
  type_id: string().optional(),
});

export const fbsCancelReasonAvailabilitySchema: Schema<OzonFbsCancelReasonAvailability> =
  object({
    id: integerSchema.optional(),
    is_available_for_cancellation: boolean().optional(),
    title: string().optional(),
    type_id: string().optional(),
  });
