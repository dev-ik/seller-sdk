import { array, number, object, string, type Schema } from "@safe-shape/core";
import type {
  GetAnalyticsDataV1Response,
  OzonAnalyticsDataDimension,
  OzonAnalyticsDataRow,
} from "./types.js";

const dimensionSchema: Schema<OzonAnalyticsDataDimension> = object({
  id: string().optional(),
  name: string().optional(),
});

const dataRowSchema: Schema<OzonAnalyticsDataRow> = object({
  dimensions: array(dimensionSchema).optional(),
  metrics: array(number()).optional(),
});

export const getAnalyticsDataV1ResponseSchema: Schema<GetAnalyticsDataV1Response> =
  object({
    result: object({
      data: array(dataRowSchema).optional(),
      totals: array(number()).optional(),
    }).optional(),
    timestamp: string().optional(),
  });
