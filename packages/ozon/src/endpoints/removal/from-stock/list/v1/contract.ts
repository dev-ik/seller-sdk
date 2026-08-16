import { array, object, string, type Schema } from "@safe-shape/core";
import { removalSummaryRowSchema } from "../../../shared/contract.js";
import type { ListStockReturnsV1Response } from "./types.js";

export const listStockReturnsV1ResponseSchema: Schema<ListStockReturnsV1Response> =
  object({
    last_id: string().optional(),
    returns_summary_report_rows: array(removalSummaryRowSchema).optional(),
  });
