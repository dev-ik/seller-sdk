import { array, object, string, type Schema } from "@safe-shape/core";
import {
  transportLabelErrorSchema,
  transportLabelStatusSchema,
} from "../../shared/v1/contract.js";
import type { GetTransportLabelsStatusV1Response } from "./types.js";
export const getTransportLabelsStatusV1ResponseSchema: Schema<GetTransportLabelsStatusV1Response> =
  object({
    error_reasons: array(transportLabelErrorSchema).optional(),
    result: object({ file_url: string().optional() }).optional(),
    status: transportLabelStatusSchema.optional(),
  });
