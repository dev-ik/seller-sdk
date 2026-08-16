import { array, object, string, type Schema } from "@safe-shape/core";
import type { ListFbsPostingProductCountriesV2Response } from "./types.js";
export const listFbsPostingProductCountriesV2ResponseSchema: Schema<ListFbsPostingProductCountriesV2Response> =
  object({
    result: array(
      object({
        country_iso_code: string().optional(),
        name: string().optional(),
      }),
    ).optional(),
  });
