import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import { fbpBundleItemErrorSchema } from "../../../../shared/v1/contract.js";
import type { ValidateFbpDirectDraftProductsV1Response } from "./types.js";
const product = {
  barcode: string().optional(),
  icon_name: string().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
  volume: number().optional(),
};
export const validateFbpDirectDraftProductsV1ResponseSchema: Schema<ValidateFbpDirectDraftProductsV1Response> =
  object({
    approved_items: array(object(product)).optional(),
    bundle_generated: boolean().optional(),
    bundle_id: string().optional(),
    rejected_items: array(
      object({
        ...product,
        rejection_reasons: array(fbpBundleItemErrorSchema).optional(),
      }),
    ).optional(),
  });
