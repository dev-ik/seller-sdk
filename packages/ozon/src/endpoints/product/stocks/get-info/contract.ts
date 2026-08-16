import {
  array,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetProductStocksResponse } from "./types.js";

const shipmentType = union([
  literal("SHIPMENT_TYPE_GENERAL"),
  literal("SHIPMENT_TYPE_BOX"),
  literal("SHIPMENT_TYPE_PALLET"),
]);

const stock = object({
  present: integerSchema.optional(),
  reserved: integerSchema.optional(),
  shipment_type: shipmentType.optional(),
  sku: integerSchema.optional(),
  type: string().optional(),
  warehouse_ids: array(integerSchema).optional(),
});

const item = object({
  offer_id: string().optional(),
  product_id: integerSchema.optional(),
  stocks: array(stock).optional(),
});

export const getProductStocksResponseSchema: Schema<GetProductStocksResponse> =
  object({
    cursor: string().optional(),
    items: array(item).optional(),
    total: integerSchema.optional(),
  });
