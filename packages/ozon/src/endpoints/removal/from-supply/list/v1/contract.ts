import { array, object, string, type Schema } from "@safe-shape/core";
import { removalSummaryRowSchema } from "../../../shared/contract.js";
import type { ListSupplyReturnsV1Response } from "./types.js";

export const listSupplyReturnsV1ResponseSchema: Schema<ListSupplyReturnsV1Response> =
  object({
    last_id: string().optional(),
    returns_summary_report_rows: array(removalSummaryRowSchema).optional(),
  });
