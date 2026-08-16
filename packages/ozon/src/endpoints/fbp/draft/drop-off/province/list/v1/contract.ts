import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import type { ListFbpDropOffProvincesV1Response } from "./types.js";
export const listFbpDropOffProvincesV1ResponseSchema: Schema<ListFbpDropOffProvincesV1Response> =
  object({
    provinces: array(
      object({
        name: string().optional(),
        points_count: integerSchema.optional(),
        province_uuid: string().optional(),
      }),
    ).optional(),
  });
