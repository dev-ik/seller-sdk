import { boolean, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";

export const fbsCancelReasonSchema = object({
  id: integerSchema.optional(),
  title: string().optional(),
  type_id: string().optional(),
});

export const fbsCancelReasonAvailabilitySchema = object({
  id: integerSchema.optional(),
  is_available_for_cancellation: boolean().optional(),
  title: string().optional(),
  type_id: string().optional(),
});
