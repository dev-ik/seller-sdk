import { array, literal, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import {
  cargoTransportCreateErrorSchema,
  cargoTransportStatusSchema,
} from "../../../../shared/v1/contract.js";
import type { GetTransportCargoesCreateStatusV1Response } from "./types.js";
export const getTransportCargoesCreateStatusV1ResponseSchema: Schema<GetTransportCargoesCreateStatusV1Response> =
  object({
    error_reasons: array(cargoTransportCreateErrorSchema).optional(),
    result: object({
      transport_cargoes: array(
        object({
          id: integerSchema.optional(),
          type: literal("PALLET").optional(),
        }),
      ).optional(),
    }).optional(),
    status: cargoTransportStatusSchema.optional(),
  });
