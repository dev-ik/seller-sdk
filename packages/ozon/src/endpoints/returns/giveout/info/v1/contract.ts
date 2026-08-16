import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { giveoutArticleSchema } from "../../shared/contract.js";
import type { GetGiveoutInfoV1Response } from "./types.js";
export const getGiveoutInfoV1ResponseSchema: Schema<GetGiveoutInfoV1Response> =
  object({
    articles: array(giveoutArticleSchema).optional(),
    giveout_id: integerSchema.optional(),
    giveout_status: string().optional(),
    warehouse_address: string().optional(),
    warehouse_name: string().optional(),
  });
