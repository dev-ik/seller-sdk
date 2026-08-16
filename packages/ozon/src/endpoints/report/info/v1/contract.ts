import { object, type Schema } from "@safe-shape/core";
import { reportSchema } from "../../shared/contract.js";
import type { GetReportInfoV1Response } from "./types.js";
export const getReportInfoV1ResponseSchema: Schema<GetReportInfoV1Response> =
  object({ result: reportSchema.optional() });
