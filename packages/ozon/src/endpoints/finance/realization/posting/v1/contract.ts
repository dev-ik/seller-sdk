import { array, number, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import {
  realizationReportCommissionSchema,
  realizationReportHeaderSchema,
  realizationReportItemSchema,
} from "../../shared/contract.js";
import type { GetRealizationPostingReportV1Response } from "./types.js";

export const getRealizationPostingReportV1ResponseSchema: Schema<GetRealizationPostingReportV1Response> =
  object({
    header: realizationReportHeaderSchema.optional(),
    rows: array(
      object({
        commission_ratio: number().optional(),
        delivery_commission: realizationReportCommissionSchema.optional(),
        item: realizationReportItemSchema.optional(),
        legal_entity_document: object({
          number: string().optional(),
          sale_date: string().optional(),
        }).optional(),
        order: object({
          created_date: string().optional(),
          posting_number: string().optional(),
        }).optional(),
        return_commission: realizationReportCommissionSchema.optional(),
        row_number: integerSchema.optional(),
        seller_price_per_instance: number().optional(),
      }),
    ).optional(),
  });
