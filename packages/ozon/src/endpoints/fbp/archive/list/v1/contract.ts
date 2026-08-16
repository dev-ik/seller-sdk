import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import {
  fbpArchiveDeclineReasonSchema,
  fbpArchiveDeliveryDetailsSchema,
  fbpArchiveSkuSummarySchema,
  fbpArchiveStatusSchema,
} from "../../shared/v1/contract.js";
import type { ListFbpArchiveSuppliesV1Response } from "./types.js";

export const listFbpArchiveSuppliesV1ResponseSchema: Schema<ListFbpArchiveSuppliesV1Response> =
  object({
    has_next: boolean().optional(),
    items: array(
      object({
        act_file_uuid: string().optional(),
        bundle_id: string().optional(),
        bundle_sku_summary: fbpArchiveSkuSummarySchema.optional(),
        created_date: rfc3339DateTimeSchema.optional(),
        decline_reason: fbpArchiveDeclineReasonSchema.optional(),
        delivery_details: fbpArchiveDeliveryDetailsSchema.optional(),
        external_order_id: string().optional(),
        has_act: boolean().optional(),
        has_label: boolean().optional(),
        order_draft_id: integerSchema.optional(),
        package_units_count: integerSchema.optional(),
        receive_date: rfc3339DateTimeSchema.optional(),
        row_version: integerSchema.optional(),
        status: fbpArchiveStatusSchema.optional(),
        supply_id: string().optional(),
        warehouse_id: integerSchema.optional(),
        whc_order_id: integerSchema.optional(),
      }),
    ).optional(),
    last_id: integerSchema.optional(),
  });
