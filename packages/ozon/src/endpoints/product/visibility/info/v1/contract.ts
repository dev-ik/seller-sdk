import { array, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { productPlacementSchema } from "../../shared/contract.js";
import type {
  GetProductVisibilityInfoV1Response,
  OzonProductVisibilityInfo,
} from "./types.js";

const itemSchema: Schema<OzonProductVisibilityInfo> = object({
  showcases_visibility: productPlacementSchema.optional(),
  sku: integerSchema.optional(),
});

export const getProductVisibilityInfoV1ResponseSchema: Schema<GetProductVisibilityInfoV1Response> =
  object({ items: array(itemSchema).optional() });
