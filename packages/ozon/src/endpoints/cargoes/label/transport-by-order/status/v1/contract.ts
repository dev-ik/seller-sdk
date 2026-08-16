import { array, object, string, type Schema } from "@safe-shape/core";
import {
  transportLabelStatusSchema,
  transportOrderLabelErrorSchema,
} from "../../../transport/shared/v1/contract.js";
import type { GetTransportLabelsByOrderStatusV1Response } from "./types.js";
export const getTransportLabelsByOrderStatusV1ResponseSchema: Schema<GetTransportLabelsByOrderStatusV1Response> =
  object({
    error_reasons: array(transportOrderLabelErrorSchema).optional(),
    result: object({
      file_url: string().optional(),
      skipped_supplies_ids: array(string()).optional(),
    }).optional(),
    status: transportLabelStatusSchema.optional(),
  });
