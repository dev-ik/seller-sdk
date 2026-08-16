import { array, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { reportSchema } from "../../shared/contract.js";
import type { ListReportsV1Response } from "./types.js";
export const listReportsV1ResponseSchema: Schema<ListReportsV1Response> =
  object({
    result: object({
      reports: array(reportSchema).optional(),
      total: integerSchema.optional(),
    }).optional(),
  });
