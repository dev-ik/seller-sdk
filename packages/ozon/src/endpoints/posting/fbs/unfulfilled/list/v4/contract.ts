import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import { fbsPostingV4Schema } from "../../../shared/v4/contract.js";
import type { ListUnfulfilledFbsPostingsV4Response } from "./types.js";

export const listUnfulfilledFbsPostingsV4ResponseSchema: Schema<ListUnfulfilledFbsPostingsV4Response> =
  object({
    count: integerSchema.optional(),
    cursor: string().optional(),
    has_next: boolean().optional(),
    postings: array(fbsPostingV4Schema).optional(),
  });
