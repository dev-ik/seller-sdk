import {
  array,
  boolean,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetSupplyOrderBundleResponse } from "./types.js";

const sfboSchema = union([
  literal("ITEM_SFBO_ATTRIBUTE_NONE"),
  literal("ITEM_SFBO_ATTRIBUTE_SUPER_FBO"),
  literal("ITEM_SFBO_ATTRIBUTE_ANTI_FBO"),
]);
const shipmentSchema = union([
  literal("BUNDLE_ITEM_SHIPMENT_TYPE_GENERAL"),
  literal("BUNDLE_ITEM_SHIPMENT_TYPE_BOX"),
  literal("BUNDLE_ITEM_SHIPMENT_TYPE_PALLET"),
]);
const tagSchema = union([
  literal("EVSD_REQUIRED"),
  literal("MARKING_REQUIRED"),
  literal("MARKING_POSSIBLE"),
  literal("JEWELRY"),
  literal("TRACEABLE"),
  literal("ETTN_REQUIRED"),
  literal("UNDEFINED"),
]);
const zoneSchema = union([
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

export const getSupplyOrderBundleResponseSchema: Schema<GetSupplyOrderBundleResponse> =
  object({
    items: array(
      object({
        icon_path: string().optional(),
        sku: integerSchema.optional(),
        name: string().optional(),
        offer_id: string().optional(),
        quantity: integerSchema.optional(),
        barcode: string().optional(),
        product_id: integerSchema.optional(),
        quant: integerSchema.optional(),
        is_quant_editable: boolean().optional(),
        volume_in_litres: number().optional(),
        total_volume_in_litres: number().optional(),
        contractor_item_code: string().optional(),
        sfbo_attribute: sfboSchema.optional(),
        shipment_type: shipmentSchema.optional(),
        tags: array(tagSchema).optional(),
        placement_zone: zoneSchema.optional(),
      }),
    ).optional(),
    total_count: integerSchema.optional(),
    has_next: boolean().optional(),
    last_id: string().optional(),
  });
