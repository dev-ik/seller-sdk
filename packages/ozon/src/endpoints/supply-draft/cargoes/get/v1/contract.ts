import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { supplyCargoSchema } from "../../shared/contract.js";
import type { GetSupplyCargoesResponse } from "./types.js";
export const getSupplyCargoesResponseSchema: Schema<GetSupplyCargoesResponse> =
  object({
    supply: array(
      object({
        bundle_id: string().optional(),
        cargoes: array(supplyCargoSchema).optional(),
        supply_id: integerSchema.optional(),
      }),
    ).optional(),
  });
