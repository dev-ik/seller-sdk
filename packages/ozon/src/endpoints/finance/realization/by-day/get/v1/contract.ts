import { array, number, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import {
  realizationReportCommissionSchema,
  realizationReportItemSchema,
} from "../../../shared/contract.js";
import type {
  GetRealizationReportByDayV1Response,
  OzonRealizationReportByDayRow,
} from "./types.js";

const rowSchema: Schema<OzonRealizationReportByDayRow> = object({
  commission_ratio: number().optional(),
  delivery_commission: realizationReportCommissionSchema.optional(),
  item: realizationReportItemSchema.optional(),
  return_commission: realizationReportCommissionSchema.optional(),
  rowNumber: integerSchema.optional(),
  seller_price_per_instance: number().optional(),
});

export const getRealizationReportByDayV1ResponseSchema: Schema<GetRealizationReportByDayV1Response> =
  object({ rows: array(rowSchema).optional() });
