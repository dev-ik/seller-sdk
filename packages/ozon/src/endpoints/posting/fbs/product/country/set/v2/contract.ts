import { boolean, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import type { SetFbsPostingProductCountryV2Response } from "./types.js";
export const setFbsPostingProductCountryV2ResponseSchema: Schema<SetFbsPostingProductCountryV2Response> =
  object({
    is_gtd_needed: boolean().optional(),
    product_id: integerSchema.optional(),
  });
