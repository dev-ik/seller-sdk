import { object, string, type Schema } from "@safe-shape/core";
import type { CreateDiscountedReportV1Response } from "./types.js";
export const createDiscountedReportV1ResponseSchema: Schema<CreateDiscountedReportV1Response> =
  object({ code: string().optional() });
