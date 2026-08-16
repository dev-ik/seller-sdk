import { array, literal, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { GetSupplyCargoesV1Response } from "./types.js";
const cargo = object({
  barcode: string().optional(),
  bundle_id: string().optional(),
  cargo_id: integerSchema.optional(),
});
export const getSupplyCargoesV1ResponseSchema: Schema<GetSupplyCargoesV1Response> =
  object({
    not_found_supply_ids: array(string()).optional(),
    supplies_cargoes: array(
      object({
        bundle_id: string().optional(),
        cargoes_without_transport_cargoes: array(cargo).optional(),
        supply_id: integerSchema.optional(),
        transport_cargoes: array(
          object({
            bundle_id: string().optional(),
            cargoes: array(cargo).optional(),
            transport_cargo_id: integerSchema.optional(),
            type: literal("PALLET").optional(),
          }),
        ).optional(),
      }),
    ).optional(),
  });
