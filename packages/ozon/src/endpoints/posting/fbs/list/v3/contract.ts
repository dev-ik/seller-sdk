import { array, boolean, object, type Schema } from "@safe-shape/core";
import { fbsPostingV3Schema } from "../../shared/v3/contract.js";
import type { ListFbsPostingsV3Response } from "./types.js";

export const listFbsPostingsV3ResponseSchema: Schema<ListFbsPostingsV3Response> =
  object({
    result: object({
      has_next: boolean().optional(),
      postings: array(fbsPostingV3Schema).optional(),
    }).optional(),
  });
