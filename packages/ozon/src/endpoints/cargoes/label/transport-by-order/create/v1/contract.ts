import { array, object, string, type Schema } from "@safe-shape/core";
import { transportOrderLabelErrorSchema } from "../../../transport/shared/v1/contract.js";
import type { CreateTransportLabelsByOrderV1Response } from "./types.js";
export const createTransportLabelsByOrderV1ResponseSchema: Schema<CreateTransportLabelsByOrderV1Response> =
  object({
    error_reasons: array(transportOrderLabelErrorSchema).optional(),
    operation_id: string().optional(),
  });
