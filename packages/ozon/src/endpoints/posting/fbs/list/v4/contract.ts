import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { fbsPostingV4Schema } from "../../shared/v4/contract.js";
import type { ListFbsPostingsV4Response } from "./types.js";

export const listFbsPostingsV4ResponseSchema: Schema<ListFbsPostingsV4Response> =
  object({
    cursor: string().nullable().optional(),
    has_next: boolean().nullable().optional(),
    postings: array(fbsPostingV4Schema).nullable().optional(),
  });
