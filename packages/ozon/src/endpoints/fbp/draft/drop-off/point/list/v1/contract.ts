import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../../../contracts/rfc3339-date-time.js";
import type { ListFbpDropOffPointsV1Response } from "./types.js";
export const listFbpDropOffPointsV1ResponseSchema: Schema<ListFbpDropOffPointsV1Response> =
  object({
    drop_off_points: array(
      object({
        city: string().optional(),
        drop_off_point_id: integerSchema.optional(),
        nearest_drop_off_date: rfc3339DateTimeSchema.optional(),
        point_address: string().optional(),
        province_uuid: string().optional(),
      }),
    ).optional(),
  });
