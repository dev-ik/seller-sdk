import { array, object, string, type Schema } from "@safe-shape/core";
import { cargoTransportBindErrorSchema } from "../../../shared/v1/contract.js";
import type { BindTransportCargoesV1Response } from "./types.js";
export const bindTransportCargoesV1ResponseSchema: Schema<BindTransportCargoesV1Response> =
  object({
    error_reasons: array(cargoTransportBindErrorSchema).optional(),
    operation_id: string().optional(),
  });
