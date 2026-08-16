import { object, string } from "@safe-shape/core";

export const createPlacementReportResponseSchema = object({
  code: string().optional(),
});
