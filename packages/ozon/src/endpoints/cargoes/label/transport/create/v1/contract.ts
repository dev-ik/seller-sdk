import { array, object, string, type Schema } from "@safe-shape/core";
import { transportLabelErrorSchema } from "../../shared/v1/contract.js";
import type { CreateTransportLabelsV1Response } from "./types.js";
export const createTransportLabelsV1ResponseSchema: Schema<CreateTransportLabelsV1Response> =
  object({
    error_reasons: array(transportLabelErrorSchema).optional(),
    operation_id: string().optional(),
  });
