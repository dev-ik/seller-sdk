import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { ozonNotificationCheckErrorTypeSchema } from "../../shared/v1/contract.js";
import type { CheckNotificationV1Response } from "./types.js";

export const checkNotificationV1ResponseSchema: Schema<CheckNotificationV1Response> =
  object({
    errors: array(
      object({
        description: string().optional(),
        type: ozonNotificationCheckErrorTypeSchema.optional(),
      }),
    ).optional(),
    is_active: boolean(),
  });
