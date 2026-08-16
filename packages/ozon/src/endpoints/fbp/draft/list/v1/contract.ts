import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import { fbpArchiveDeliveryDetailsSchema } from "../../../archive/shared/v1/contract.js";
import { fbpDraftStatusSchema } from "../../get/v1/contract.js";
import { fbpCancellationStateSchema } from "../../shared/v1/contract.js";
import type { ListFbpDraftsV1Response } from "./types.js";

export const listFbpDraftsV1ResponseSchema: Schema<ListFbpDraftsV1Response> =
  object({
    has_next: boolean().optional(),
    items: array(
      object({
        bundle_id: string().optional(),
        cancellation_state: fbpCancellationStateSchema.optional(),
        created_at: rfc3339DateTimeSchema.optional(),
        deleted_at: rfc3339DateTimeSchema.optional(),
        delivery_details: fbpArchiveDeliveryDetailsSchema.optional(),
        editable: boolean().optional(),
        id: integerSchema.optional(),
        is_cancelable: boolean().optional(),
        is_deletable: boolean().optional(),
        locked: boolean().optional(),
        package_units_count: integerSchema.optional(),
        status: fbpDraftStatusSchema.optional(),
        supply_id: string().optional(),
        warehouse_id: integerSchema.optional(),
      }),
    ).optional(),
    last_id: integerSchema.optional(),
  });
