import { boolean, number, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { OzonRemovalSummaryRow } from "./types.js";

export const removalSummaryRowSchema: Schema<OzonRemovalSummaryRow> = object({
  barcode: string().optional(),
  box_barcode: string().optional(),
  box_height: number().optional(),
  box_id: integerSchema.optional(),
  box_length: number().optional(),
  box_state: string().optional(),
  box_volume: number().optional(),
  box_weight: number().optional(),
  box_width: number().optional(),
  clearing_warehouse_name: string().optional(),
  delivery_date: string().optional(),
  delivery_type: string().optional(),
  destination_warehouse_address: string().optional(),
  destination_warehouse_name: string().optional(),
  given_out_date: string().optional(),
  is_auto_return: boolean().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  preliminary_delivery_price: number().optional(),
  quant_count: integerSchema.optional(),
  quantity_for_return: integerSchema.optional(),
  return_created_at: string().optional(),
  return_id: integerSchema.optional(),
  return_state: string().optional(),
  sku: integerSchema.optional(),
  stock_type: string().optional(),
  utilization_date: string().optional(),
});
