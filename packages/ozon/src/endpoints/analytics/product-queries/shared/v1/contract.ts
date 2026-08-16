import { object, string, type Schema } from "@safe-shape/core";
import type { AnalyticsProductQueriesPeriod } from "./types.js";

export const analyticsProductQueriesPeriodSchema: Schema<AnalyticsProductQueriesPeriod> =
  object({
    date_from: string().optional(),
    date_to: string().optional(),
  });
