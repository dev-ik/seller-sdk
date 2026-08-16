import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetFbsReturnCompanyInfoV1Response } from "./types.js";
export const getFbsReturnCompanyInfoV1ResponseSchema: Schema<GetFbsReturnCompanyInfoV1Response> =
  object({
    drop_off_points: array(
      object({
        address: string().optional(),
        box_count: integerSchema.optional(),
        id: integerSchema.optional(),
        name: string().optional(),
        pass_info: object({
          count: integerSchema.optional(),
          is_required: boolean().optional(),
        }).optional(),
        place_id: integerSchema.optional(),
        returns_count: integerSchema.optional(),
        utc_offset: string().optional(),
        warehouses_ids: array(string()).optional(),
      }),
    ).optional(),
    has_next: boolean().optional(),
  });
