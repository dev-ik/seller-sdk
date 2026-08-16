import { literal, object, string, union, type Schema } from "@safe-shape/core";
import type { GetFbpLabelsV1Response } from "./types.js";

export const getFbpLabelsV1ResponseSchema: Schema<GetFbpLabelsV1Response> =
  object({
    label_url: string().optional(),
    state: union([
      literal("UNSPECIFIED"),
      literal("IN_PROGRESS"),
      literal("FINISHED"),
      literal("FAILED"),
    ]).optional(),
  });
