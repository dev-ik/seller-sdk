import { object, string, type Schema } from "@safe-shape/core";
import type { GetUtilizationSettingsV1Response } from "./types.js";
const money = object({
  amount: string().optional(),
  currency: string().optional(),
});
export const getUtilizationSettingsV1ResponseSchema: Schema<GetUtilizationSettingsV1Response> =
  object({
    min_price: money.optional(),
    utilization_settings: object({
      utilization_price: money.optional(),
      utilization_price_defects: money.optional(),
    }).optional(),
  });
