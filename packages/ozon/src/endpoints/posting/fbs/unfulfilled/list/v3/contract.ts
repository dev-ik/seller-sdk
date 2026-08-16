import { array, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import { fbsPostingV3Schema } from "../../../shared/v3/contract.js";
import type { ListUnfulfilledFbsPostingsV3Response } from "./types.js";

export const listUnfulfilledFbsPostingsV3ResponseSchema: Schema<ListUnfulfilledFbsPostingsV3Response> =
  object({
    result: object({
      count: integerSchema.optional(),
      postings: array(fbsPostingV3Schema).optional(),
    }).optional(),
  });
