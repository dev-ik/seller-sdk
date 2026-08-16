import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { ozonNotificationTypeSchema } from "../../../shared/v1/contract.js";
import type { ListNotificationPushTypesV1Response } from "./types.js";

export const listNotificationPushTypesV1ResponseSchema: Schema<ListNotificationPushTypesV1Response> =
  object({
    types: array(
      object({
        description: string(),
        seller_endpoint: object({
          id: integerSchema,
          url: string(),
        }).optional(),
        type: ozonNotificationTypeSchema,
      }),
    ),
  });
