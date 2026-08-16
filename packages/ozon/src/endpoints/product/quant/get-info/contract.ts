import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetQuantProductsInfoResponse } from "./types.js";

const barcodeSchema = object({
  barcode: string().optional(),
  error: string().optional(),
  status: string().optional(),
});

const dimensionsSchema = object({
  depth: integerSchema.optional(),
  height: integerSchema.optional(),
  weight: integerSchema.optional(),
  width: integerSchema.optional(),
});

const marketingPriceSchema = object({
  price: string().optional(),
  seller_price: string().optional(),
});

const statusSchema = object({
  state_description: string().optional(),
  state_name: string().optional(),
  state_sys_name: string().optional(),
  state_tooltip: string().optional(),
});

const quantSchema = object({
  barcodes_extended: array(barcodeSchema).optional(),
  dimensions: dimensionsSchema.optional(),
  marketing_price: marketingPriceSchema.optional(),
  min_price: string().optional(),
  old_price: string().optional(),
  price: string().optional(),
  quant_code: string().optional(),
  quant_sice: integerSchema.optional(),
  shipment_type: string().optional(),
  sku: integerSchema.optional(),
  statuses: statusSchema.optional(),
});

const quantInfoSchema = object({
  quants: array(quantSchema).optional(),
});

const itemSchema = object({
  offer_id: string().optional(),
  product_id: integerSchema.optional(),
  quant_info: quantInfoSchema.optional(),
});

/** @internal */
export const getQuantProductsInfoResponseSchema: Schema<GetQuantProductsInfoResponse> =
  object({
    items: array(itemSchema).optional(),
  });
