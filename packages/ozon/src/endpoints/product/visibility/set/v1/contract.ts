import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import {
  productPlacementSchema,
  productShowcaseSchema,
  selectPermissionSchema,
} from "../../shared/contract.js";
import type {
  OzonProductVisibilitySetError,
  OzonProductVisibilitySetResult,
  SetProductVisibilityV1Response,
} from "./types.js";

const itemSchema: Schema<OzonProductVisibilitySetResult> = object({
  select_permission: selectPermissionSchema.optional(),
  seller_item_placement: productPlacementSchema.optional(),
  seller_item_placement_list: array(productShowcaseSchema).optional(),
  showcases_visibility: productPlacementSchema.optional(),
  showcases_visibility_list: array(productShowcaseSchema).optional(),
  sku: integerSchema.optional(),
  warnings: array(string()).optional(),
});

const errorSchema: Schema<OzonProductVisibilitySetError> = object({
  code: string().optional(),
  sku: integerSchema.optional(),
});

export const setProductVisibilityV1ResponseSchema: Schema<SetProductVisibilityV1Response> =
  object({
    items: array(itemSchema).optional(),
    items_errors: array(errorSchema).optional(),
  });
