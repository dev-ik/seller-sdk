import { array, literal, object, union, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { GetProductPlacementZoneInfoResponse } from "./types.js";

const placementZoneSchema = union([
  literal("UNSPECIFIED"),
  literal("CLOSED_ZONE"),
  literal("DANGEROUS_GOODS"),
  literal("PRODUCTS"),
  literal("SORT"),
  literal("NON_SORT"),
  literal("OVERSIZE"),
  literal("JEWELRY"),
  literal("UNRESOLVED"),
]);

const productPlacementSchema = object({
  placement_zone: placementZoneSchema.optional(),
  sku: integerSchema.optional(),
});

/** @internal */
export const getProductPlacementZoneInfoResponseSchema: Schema<GetProductPlacementZoneInfoResponse> =
  object({
    products_placement: array(productPlacementSchema).optional(),
  });
