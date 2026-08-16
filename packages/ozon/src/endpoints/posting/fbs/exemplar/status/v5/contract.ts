import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetFbsPostingProductExemplarStatusV5Response } from "./types.js";

const markSchema = object({
  check_status: string().optional(),
  error_codes: array(string()).optional(),
  mark: string().optional(),
  mark_type: string().optional(),
});

const exemplarSchema = object({
  exemplar_id: integerSchema.optional(),
  gtd: string().optional(),
  gtd_check_status: string().optional(),
  gtd_error_codes: array(string()).optional(),
  is_gtd_absent: boolean().optional(),
  is_rnpt_absent: boolean().optional(),
  marks: array(markSchema).optional(),
  rnpt: string().optional(),
  rnpt_check_status: string().optional(),
  rnpt_error_codes: array(string()).optional(),
  weight: number().optional(),
  weight_check_status: string().optional(),
  weight_error_codes: array(string()).optional(),
});

const productSchema = object({
  exemplars: array(exemplarSchema).optional(),
  product_id: integerSchema.optional(),
});

export const getFbsPostingProductExemplarStatusV5ResponseSchema: Schema<GetFbsPostingProductExemplarStatusV5Response> =
  object({
    posting_number: string().optional(),
    products: array(productSchema).optional(),
    status: string().optional(),
  });
