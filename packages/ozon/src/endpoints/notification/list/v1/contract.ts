import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import { ozonNotificationTypeSchema } from "../../shared/v1/contract.js";
import type { ListNotificationsV1Response } from "./types.js";

export const listNotificationsV1ResponseSchema: Schema<ListNotificationsV1Response> =
  object({
    total_count: integerSchema,
    availability_status_thresholds: array(
      object({ status: string(), threshold: integerSchema }),
    ),
    urls: array(
      object({
        availability_status: string(),
        availability_status_date: rfc3339DateTimeSchema,
        disable_reason: string(),
        problematic_type: string(),
        reason_details: string(),
        created_at: rfc3339DateTimeSchema,
        enable: boolean(),
        id: integerSchema,
        types: array(
          object({
            description: string(),
            type: ozonNotificationTypeSchema,
          }),
        ),
        url: string(),
      }),
    ),
  });
