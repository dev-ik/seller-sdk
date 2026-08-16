import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { ListFbpWarehousesV1Response } from "./types.js";

export const listFbpWarehousesV1ResponseSchema: Schema<ListFbpWarehousesV1Response> =
  object({
    warehouses: array(
      object({
        address_detailing: object({
          city: string().optional(),
          country: string().optional(),
          house: string().optional(),
          region: string().optional(),
          street: string().optional(),
          zipcode: string().optional(),
        }).optional(),
        id: integerSchema.optional(),
        is_bonded: boolean().optional(),
        name: string().optional(),
        partner_name: string().optional(),
        supply_types: array(integerSchema).optional(),
        timezone_name: string().optional(),
      }),
    ).optional(),
  });
