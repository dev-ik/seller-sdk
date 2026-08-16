import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { cargoCreateErrorsV2Schema } from "../../shared/contract.js";
import type { GetSupplyCargoesCreateInfoResponse } from "./types.js";
export const getSupplyCargoesCreateInfoResponseSchema: Schema<GetSupplyCargoesCreateInfoResponse> =
  object({
    errors: cargoCreateErrorsV2Schema.optional(),
    result: object({
      cargoes: array(
        object({
          key: string().optional(),
          value: object({ cargo_id: integerSchema.optional() }).optional(),
        }),
      ).optional(),
    }).optional(),
    status: union([
      literal("STATUS_UNSPECIFIED"),
      literal("SUCCESS"),
      literal("IN_PROGRESS"),
      literal("FAILED"),
    ]).optional(),
  });
