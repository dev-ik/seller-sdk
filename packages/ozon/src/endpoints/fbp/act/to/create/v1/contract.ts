import { object, string, type Schema } from "@safe-shape/core";
import type { CreateFbpConsignmentNoteV1Response } from "./types.js";

export const createFbpConsignmentNoteV1ResponseSchema: Schema<CreateFbpConsignmentNoteV1Response> =
  object({ code: string().optional() });
