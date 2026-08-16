import { object, string, type Schema } from "@safe-shape/core";
import type { CreateRealizationPostingReportV1Response } from "./types.js";

export const createRealizationPostingReportV1ResponseSchema: Schema<CreateRealizationPostingReportV1Response> =
  object({ code: string().optional() });
