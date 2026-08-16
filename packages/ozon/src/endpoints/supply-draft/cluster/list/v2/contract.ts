import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { ListSupplyClustersV2Response } from "./types.js";
const country = object({ name: string().optional(), uid: string().optional() });
const macro = object({
  country: country.optional(),
  name: string().optional(),
});
const fulfillment = object({
  name: string().optional(),
  warehouse_id: integerSchema.optional(),
});
const data = object({
  fulfillments: array(fulfillment).optional(),
  macrolocal_cluster: macro.optional(),
});
export const listSupplyClustersV2ResponseSchema: Schema<ListSupplyClustersV2Response> =
  object({
    result: array(
      object({
        data: data.optional(),
        macrolocal_cluster_id: integerSchema.optional(),
      }),
    ).optional(),
  });
