import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import { fbsBarcodesSchema } from "../../shared/common/contract.js";
import type { GetFbsPostingByBarcodeV2Response } from "./types.js";

export const getFbsPostingByBarcodeV2ResponseSchema: Schema<GetFbsPostingByBarcodeV2Response> =
  object({
    result: object({
      barcodes: fbsBarcodesSchema.optional(),
      cancel_reason_id: integerSchema.optional(),
      created_at: rfc3339DateTimeSchema.optional(),
      in_process_at: rfc3339DateTimeSchema.optional(),
      order_id: integerSchema.optional(),
      order_number: string().optional(),
      posting_number: string().optional(),
      products: array(
        object({
          name: string().optional(),
          offer_id: string().optional(),
          price: string().optional(),
          quantity: integerSchema.optional(),
          sku: integerSchema.optional(),
        }),
      ).optional(),
      shipment_date: rfc3339DateTimeSchema.optional(),
      status: string().optional(),
    }).optional(),
  });
