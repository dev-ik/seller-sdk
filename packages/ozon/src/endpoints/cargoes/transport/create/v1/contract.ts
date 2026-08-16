import { array, object, string, type Schema } from "@safe-shape/core";
import { cargoTransportCreateErrorSchema } from "../../../shared/v1/contract.js";
import type { CreateTransportCargoesV1Response } from "./types.js";
export const createTransportCargoesV1ResponseSchema: Schema<CreateTransportCargoesV1Response> =
  object({
    error_reasons: array(cargoTransportCreateErrorSchema).optional(),
    operation_id: string().optional(),
  });
