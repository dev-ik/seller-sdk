import { literal, union, type Schema } from "@safe-shape/core";
import type {
  OzonProductPlacement,
  OzonProductShowcase,
  OzonSelectPermission,
} from "./types.js";

export const productPlacementSchema: Schema<OzonProductPlacement> = union([
  literal("UNSPECIFIED"),
  literal("OZON"),
  literal("SELECT"),
  literal("OZON_SELECT"),
  literal("NONE"),
]);

export const productShowcaseSchema: Schema<OzonProductShowcase> = union([
  literal("UNSPECIFIED"),
  literal("OZON"),
  literal("SELECT"),
]);

export const selectPermissionSchema: Schema<OzonSelectPermission> = union([
  literal("UNSPECIFIED"),
  literal("RESTRICTED"),
  literal("ALLOWED"),
]);
