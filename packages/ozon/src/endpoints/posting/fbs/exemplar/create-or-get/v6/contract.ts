import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import { ozonFbsProductExemplarSchema } from "../../shared/contract.js";
import type { CreateOrGetFbsPostingProductExemplarsV6Response } from "./types.js";

const productSchema = object({
  exemplars: array(ozonFbsProductExemplarSchema).optional(),
  has_imei: boolean().optional(),
  is_gtd_needed: boolean().optional(),
  is_jw_uin_needed: boolean().optional(),
  is_mandatory_mark_needed: boolean().optional(),
  is_mandatory_mark_possible: boolean().optional(),
  is_rnpt_needed: boolean().optional(),
  is_weight_needed: boolean().optional(),
  product_id: integerSchema.optional(),
  quantity: integerSchema.optional(),
  weight_max: number().optional(),
  weight_min: number().optional(),
});

export const createOrGetFbsPostingProductExemplarsV6ResponseSchema: Schema<CreateOrGetFbsPostingProductExemplarsV6Response> =
  object({
    multi_box_qty: integerSchema.optional(),
    posting_number: string().optional(),
    products: array(productSchema).optional(),
  });
