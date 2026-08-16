import { array, boolean, number, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";

export const ozonFbsExemplarMarkSchema = object({
  mark: string().optional(),
  mark_type: string().optional(),
});

export const ozonFbsProductExemplarSchema = object({
  exemplar_id: integerSchema.optional(),
  gtd: string().optional(),
  is_gtd_absent: boolean().optional(),
  is_rnpt_absent: boolean().optional(),
  marks: array(ozonFbsExemplarMarkSchema).optional(),
  rnpt: string().optional(),
  weight: number().optional(),
});
