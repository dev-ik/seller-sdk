import {
  array,
  boolean,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import { fbpArchiveDeliveryDetailsSchema } from "../../../archive/shared/v1/contract.js";
import { fbpCancellationStateSchema } from "../../shared/v1/contract.js";
import type { GetFbpDraftV1Response } from "./types.js";

export const fbpDraftStatusSchema = union([
  literal("DRAFT_STATUS_UNSPECIFIED"),
  literal("NEW"),
  literal("SUPPLY_VARIANT_CONFIRMATION"),
  literal("SUPPLY_NOT_CONFIRMED"),
]);

export const getFbpDraftV1ResponseSchema: Schema<GetFbpDraftV1Response> =
  object({
    bundle_id: string().optional(),
    cancellation_state: fbpCancellationStateSchema.optional(),
    created_at: rfc3339DateTimeSchema.optional(),
    decline_reason: object({
      failed_sku_ids: array(string()).optional(),
      message: string().optional(),
    }).optional(),
    deleted_at: rfc3339DateTimeSchema.optional(),
    delivery_details: fbpArchiveDeliveryDetailsSchema.optional(),
    editable: boolean().optional(),
    id: integerSchema.optional(),
    is_cancelable: boolean().optional(),
    is_deletable: boolean().optional(),
    is_registration_available: boolean().optional(),
    locked: boolean().optional(),
    package_units_count: integerSchema.optional(),
    row_version: integerSchema.optional(),
    status: fbpDraftStatusSchema.optional(),
    supply_id: string().optional(),
    warehouse_id: integerSchema.optional(),
  });
