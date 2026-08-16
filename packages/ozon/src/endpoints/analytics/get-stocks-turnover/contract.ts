import {
  array,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { GetAnalyticsStocksTurnoverResponse } from "./types.js";

const gradeSchema = union([
  literal("GRADES_NONE"),
  literal("GRADES_NOSALES"),
  literal("GRADES_GREEN"),
  literal("GRADES_YELLOW"),
  literal("GRADES_RED"),
  literal("GRADES_CRITICAL"),
]);

const itemSchema = object({
  ads: number().optional(),
  current_stock: integerSchema.optional(),
  idc: number().optional(),
  idc_grade: gradeSchema.optional(),
  name: string().optional(),
  offer_id: string().optional(),
  sku: integerSchema.optional(),
  turnover: number().optional(),
  turnover_grade: gradeSchema.optional(),
});

/** @internal */
export const getAnalyticsStocksTurnoverResponseSchema: Schema<GetAnalyticsStocksTurnoverResponse> =
  object({
    items: array(itemSchema).optional(),
  });
