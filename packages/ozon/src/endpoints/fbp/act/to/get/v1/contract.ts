import { literal, object, string, union, type Schema } from "@safe-shape/core";
import type { GetFbpConsignmentNoteV1Response } from "./types.js";

export const getFbpConsignmentNoteV1ResponseSchema: Schema<GetFbpConsignmentNoteV1Response> =
  object({
    error_message: string().optional(),
    label_url: string().optional(),
    state: union([
      literal("STATE_TYPE_UNSPECIFIED"),
      literal("IN_PROGRESS"),
      literal("FINISHED"),
      literal("FAILED"),
    ]).optional(),
  });
