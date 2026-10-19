import type { CreatePlacementReportResponse } from "./types.js";
import { object, string, type Schema } from "@safe-shape/core";

export const createPlacementReportResponseSchema: Schema<CreatePlacementReportResponse> =
  object({
    code: string().optional(),
  });
