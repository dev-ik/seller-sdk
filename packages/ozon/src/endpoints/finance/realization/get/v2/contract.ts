import { array, number, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import {
  realizationReportCommissionSchema,
  realizationReportHeaderSchema,
  realizationReportItemSchema,
} from "../../shared/contract.js";
import type { GetRealizationReportV2Response } from "./types.js";

export const getRealizationReportV2ResponseSchema: Schema<GetRealizationReportV2Response> =
  object({
    result: object({
      header: realizationReportHeaderSchema.optional(),
      rows: array(
        object({
          commission_ratio: number().optional(),
          delivery_commission: realizationReportCommissionSchema.optional(),
          item: realizationReportItemSchema.optional(),
          return_commission: realizationReportCommissionSchema.optional(),
          rowNumber: integerSchema.optional(),
          seller_price_per_instance: number().optional(),
        }),
      ).optional(),
    }).optional(),
  });
